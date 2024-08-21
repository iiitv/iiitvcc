import { useState, useEffect } from "react";
import axios from "axios";

const useFetchEvent = (eventId) => {
<<<<<<< HEAD
    const [event, setEvent] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(eventId);
=======
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/api/v1/get/event?id=${eventId}`);
        const result = response.data;
        setEvent(result.event);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  return { event, loading, error };
};

export default useFetchEvent;
