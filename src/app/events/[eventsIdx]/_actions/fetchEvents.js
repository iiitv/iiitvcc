"use server"
import { createClient } from "@/utils/supabase/server";

export default async function fetchEvents(eventsIdx) {

    const supabase = await createClient();
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: false })
        .order("time", { ascending: false })
        .range((eventsIdx - 1) * 5, eventsIdx * 5 - 1);

    if (error) {
        console.error('Error fetching events:', error);
        return { error: 'Failed to fetch events' };
    }

    return { data };

}

