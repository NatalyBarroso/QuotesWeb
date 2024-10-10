import axios from 'axios';

export default async function handler(req, res) {
  const { method } = req;

  const API_URL = `http://localhost:5000/api/quotes/today`;

  try {
    switch (method) {
      case 'GET': 
        const { data } = await axios.get(API_URL);
        res.status(200).json(data);
        break;
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).json(`Method ${method} not supported`);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}