// pages/api/v1/create/event.js
import { supabase } from '../../../../supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const authHeader = req.headers.authorization;
    const { event } = req.body;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Missing or invalid authorization header' });
    }

    if (!event || !event.name || !event.date) {
      return res.status(400).json({ success: false, message: 'Missing required event fields' });
    }

    try {
      const { data, error } = await supabase
        .from('events')
        .insert([event]);

      if (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
      return res.status(200).json({ success: true, message: 'Event created successfully', id: data[0].id });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
