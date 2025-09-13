"use server";
import { createClient } from "@/utils/supabase/server";

export async function createEvent(formData) {
    const supabase = await createClient();

    const { data: user, error: userError } = await supabase.auth.getUser();


    if (userError) {
        return { error: "Unauthenticate Request" };
    }
    if (!user) return { error: 'User not authenticated' };

    const name = formData.get("name");
    const description = formData.get("description");
    const date = formData.get("date");
    const duration = formData.get("duration");
    const mode = formData.get("mode");
    const hostLink = formData.get("host_link");
    const venue = formData.get("venue") || null;
    const requirements = formData.get("requirements").split(",").map(item => item.trim());
    const hostedRegistration = formData.get("hosted_registration");
    const registerUntil = formData.get("register_until") || null;
    const registrationLink = formData.get("registration_link") || null;
    // its file - recheck the storage syntax
    const poster = formData.get("poster");

    const venueLink = formData.get("venue_link") || null;
    const convenors = formData.get("convenors").split(",").map(item => item.trim());
    const prizes = JSON.parse(formData.get("prizes") || null);
    const time = formData.get("time")
    // const sponsors = formData.get("sponsors");


    let { data: listData, error: listError } = await supabase
        .storage
        .from('web_data')
        .list('events', { limit: 1000 });

    console.log(listData);

    let nextIdx = 1;
    if (!listError && Array.isArray(listData)) {
        const numericFolders = listData
            .map(item => parseInt(item.name))
            .filter(num => !isNaN(num));
        if (numericFolders.length > 0) {
            nextIdx = Math.max(...numericFolders) + 1;
        }
    }
    console.log({ nextIdx });

    const { data, error } = await supabase
        .from("events")
        .insert([
            {
                id: nextIdx,
                name,
                description,
                date,
                duration,
                mode,
                host_link: hostLink,
                venue,
                venue_link: venueLink,
                requirements,
                hosted_registration: hostedRegistration === "true",
                register_until: registerUntil,
                registration_link: registrationLink,
                convenors,
                prizes,
                time
            },
        ])
        .select()
        .single();


    const { error: storageError } = await supabase
        .storage
        .from('web_data')
        .upload(`events/${nextIdx}/poster`, poster, {
            cacheControl: '3600',
            upsert: true
        });

    if (storageError) {
        console.error("Error uploading poster:", storageError);
        return { error: "Error uploading poster" };
    }

    if (error) {
        console.error("Error Creating event:", error);
        return { error: "Error Creating event" };
    }
    // console.log("Fetched team data:", data)
    return data || [];
}