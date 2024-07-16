// pages/api/v1/submit/blog.js
import { supabase } from '../../../../supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const authHeader = req.headers.authorization;
    const { title, intro, assets, blog } = req.body;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Missing or invalid authorization header' });
    }

    if (!title || !blog) {
      return res.status(400).json({ success: false, message: 'Missing required fields: title or blog content' });
    }

    try {
      const { data, error } = await supabase
        .from('blogs')
        .insert([{ title, intro, assets, blog }]);

      if (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
      return res.status(200).json({ success: true, message: 'Blog submitted successfully', id: data[0].id });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
