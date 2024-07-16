// pages/api/v1/get/blogs.js
import { supabase } from '../../../../supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { limit, page } = req.query;

    let query = supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (limit) {
      const limitNum = parseInt(limit, 10);
      query = query.limit(limitNum);

      if (page) {
        const pageNum = parseInt(page, 10);
        query = query.range((pageNum - 1) * limitNum, pageNum * limitNum - 1);
      }
    }

    try {
      const { data, error } = await query;

      if (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
      return res.status(200).json({ success: true, blogs: data });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
