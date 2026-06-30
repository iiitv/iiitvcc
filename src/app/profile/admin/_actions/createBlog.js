"use server";
import { createClient } from "@/utils/supabase/server";
// import { Tables } from "@/types/supabase";
import sharp from "sharp";

async function convertToAvif(inputFile) {
  const arrayBuffer = await inputFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const avifBuffer = await sharp(buffer).avif().toBuffer();
  const blob = new Blob([new Uint8Array(avifBuffer)], { type: "image/avif" });
  const avifFile = new File([blob], inputFile.name, { type: "image/avif" });
  return avifFile;
}

function validateRequestBody(body) {
  if (!body.blogTable.title) {
    return { valid: false, message: "Title is required" };
  }
  if (!body.blog) {
    return { valid: false, message: "Blog content is required" };
  }
  return { valid: true };
}

export async function createBlog(formData) {
  const supabase = await createClient();
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      return { success: false, message: "Unauthorized" };
    }

    const blogData = JSON.parse(formData.get("blogData"));
    const posterFile = formData.get("poster");
    const bannerFile = formData.get("banner");
    const blogFile = formData.get("blog");
    let poster = posterFile;
    if (posterFile) {
      poster = await convertToAvif(posterFile);
    }
    const images = formData.getAll("images");

    const validation = validateRequestBody({
      blogTable: blogData,
      poster,
      blog: blogFile,
      images,
    });
    if (!validation.valid) {
      return { success: false, message: validation.message };
    }

    blogData.writer = user.id;
    const { data: userData, error: userDataError } = await supabase
      .from("users")
      .select("username")
      .eq("id", user.id);
    if (userDataError || !userData || userData.length === 0) {
      throw new Error(userDataError?.message || "Failed to get user data");
    }
    blogData.writer_username = userData[0].username;

    const { data: blogs, error: blogsError } = await supabase
      .from("blogs")
      .insert([blogData])
      .select();
    if (blogsError || !blogs || blogs.length === 0) {
      throw new Error(blogsError?.message || "Failed to create blog");
    }
    const blogId = blogs[0].id;

    const uploadPromises = [
      supabase.storage
        .from(process.env.NEXT_PUBLIC_BUCKET || "")
        .upload(`blogs/${blogId}/blog`, blogFile, {
          upsert: true,
        }),
    ];
    if (poster) {
      uploadPromises.push(
        supabase.storage
          .from(process.env.NEXT_PUBLIC_BUCKET || "")
          .upload(`images/${blogId}/poster`, poster, {
            upsert: true,
          }),
      );
    }
    if (bannerFile) {
      uploadPromises.push(
        supabase.storage
          .from(process.env.NEXT_PUBLIC_BUCKET || "")
          .upload(`images/${blogId}/banner`, await convertToAvif(bannerFile), {
            upsert: true,
          }),
      );
    }
    if (images.length > 0) {
      for (const image of images) {
        uploadPromises.push(
          supabase.storage
            .from(process.env.NEXT_PUBLIC_BUCKET || "")
            .upload(
              `images/${blogId}/${image.name}`,
              await convertToAvif(image),
              {
                upsert: true,
              },
            ),
        );
      }
    }

    const uploadResults = await Promise.all(uploadPromises);
    for (const result of uploadResults) {
      if (result.error) {
        throw new Error(result.error.message);
      }
    }

    return {
      success: true,
      message: "Blog created successfully",
      id: blogId,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

// import { createClient } from "@/utils/supabase/server";
// import sharp from "sharp";

// async function convertToAvif(inputFile) {
//   const arrayBuffer = await inputFile.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);
//   const avifBuffer = await sharp(buffer).avif().toBuffer();
//   const blob = new Blob([avifBuffer], { type: "image/avif" });
//   const avifFile = new File([blob], inputFile.name, { type: "image/avif" });
//   return avifFile;
// }

// function validateRequestBody(body) {
//   if (!body.blogTable.title) {
//     return { valid: false, message: "Title is required" };
//   }
//   if (!body.poster || !body.blog) {
//     return { valid: false, message: "Poster and blog files are required" };
//   }
//   return { valid: true };
// }

// export async function createBlog(formData) {
//   const supabase = await createClient();
//   try {
//     const {
//       data: { user },
//       error: userError,
//     } = await supabase.auth.getUser();
//     if (userError || !user) {
//       return { success: false, message: "Unauthorized" };
//     }

//     // Use formData to handle file uploads
//     const blogData = JSON.parse(formData.get("blogData"));
//     const posterFile = formData.get("poster");
//     const blogFile = formData.get("blog");
//     let poster = posterFile;
//     if (posterFile) {
//       poster = await convertToAvif(posterFile);
//     }
//     const images = formData.getAll("images");

//     const validation = validateRequestBody({
//       blogTable: blogData,
//       poster,
//       blog: blogFile,
//       images,
//     });
//     if (!validation.valid) {
//       return { success: false, message: validation.message };
//     }

//     blogData.writer = user.id;
//     const { data: userData, error: userDataError } = await supabase
//       .from("users")
//       .select("username")
//       .eq("id", user.id);
//     if (userDataError || !userData || userData.length === 0) {
//       throw new Error(userDataError?.message || "Failed to get user data");
//     }
//     blogData.writer_name = user;
//     blogData.writer_username = userData[0].username;

//     const { data: blogs, error: blogsError } = await supabase
//       .from("blogs")
//       .insert([blogData])
//       .select();
//     if (blogsError || !blogs || blogs.length === 0) {
//       throw new Error(blogsError?.message || "Failed to create blog");
//     }
//     const blogId = blogs[0].id;

//     const uploadPromises = [
//       supabase.storage
//         .from(process.env.NEXT_PUBLIC_BUCKET || "")
//         .upload(`blogs/${blogId}/blog`, blogFile, {
//           upsert: true,
//         }),
//       supabase.storage
//         .from(process.env.NEXT_PUBLIC_BUCKET || "")
//         .upload(`images/${blogId}/poster`, poster, {
//           upsert: true,
//         }),
//     ];
//     if (images.length > 0) {
//       for (const image of images) {
//         uploadPromises.push(
//           supabase.storage
//             .from(process.env.NEXT_PUBLIC_BUCKET || "")
//             .upload(
//               `images/${blogId}/${image.name}`,
//               await convertToAvif(image),
//               {
//                 upsert: true,
//               },
//             ),
//         );
//       }
//     }

//     const uploadResults = await Promise.all(uploadPromises);
//     const [blogUploadResult, posterUploadResult, ...imageUploadResults] = uploadResults;
//     if (blogUploadResult.error || posterUploadResult.error) {
//       throw new Error(
//         blogUploadResult.error?.message || posterUploadResult.error?.message,
//       );
//     }
//     for (const result of imageUploadResults) {
//       if (result.error) {
//         throw new Error(result.error.message);
//       }
//     }

//     return {
//       success: true,
//       message: "Blog created successfully",
//       id: blogId,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: error.message,
//     };
//   }
// }
