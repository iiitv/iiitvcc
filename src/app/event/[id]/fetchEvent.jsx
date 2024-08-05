import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchEvent = (eventId) => {
    const [event, setEvent] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
