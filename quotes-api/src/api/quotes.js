import axios from 'axios';

export default async function handler(req, res) {
  const { method, body } = req;
  const API_URL = 'http://localhost:5000/api/quotes';

  try {
    switch(method) {
      case 'GET':
        const { data } = await axios.get(API_URL);
        res.status(200).json(data);
        break;
      case 'POST':
        const response = await axios.post(API_URL, body);
        res.status(200).json(response.data);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(404).end(`Method ${method} not supported`)
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
 }