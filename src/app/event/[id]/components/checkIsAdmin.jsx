import { useState, useEffect } from "react";
import axios from "axios";

const checkIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const fetchIsAdmin = async () => {
      try {
        const response = await axios.get(`/api/rest/v1/isUserAdmin`);
        const result = response.data;
        setIsAdmin(result.isAdmin);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIsAdmin();
  }, [isAdmin]);

  return isAdmin;
};

export default checkIsAdmin;
