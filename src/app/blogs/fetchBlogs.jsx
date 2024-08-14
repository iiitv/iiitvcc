import { useState, useEffect } from "react";
import axios from "axios";

const useFetchBlog = (currentPage) => {
  const [blogs, setBlogs] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `/api/v1/get/blogs?page=${currentPage}`,
        );
        const result = response.data;
        setBlogs(result.blogs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [currentPage]);

  return { blogs, loading, error };
};

export default useFetchBlog;
