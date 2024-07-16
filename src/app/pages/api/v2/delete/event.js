// pages/api/v1/delete/event.js
import { supabase } from '../../../../supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Missing or invalid authorization header' });
    }

    if (!id || id.length !== 36) {
      return res.status(400).json({ success: false, message: 'Invalid or missing event ID' });
    }

    try {
      const { data, error } = await supabase
        .from('events')
        .delete()
        .eq('id', id);

      if (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
      return res.status(200).json({ success: true, message: 'Event deleted successfully' });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
