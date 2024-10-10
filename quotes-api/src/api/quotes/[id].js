import axios from 'axios';

export default async function handler(req, res) {
  const { method, body, query } = req;

  const API_URL = `http://localhost:5000/api/quotes/${query.id}`

  try {
    switch(method) {
      case 'GET': 
        const { data } = await axios.get(API_URL);
        res.status(200).json(data);
        break;
      case 'PUT':
        const response = await axios.put(API_URL, body);
        res.status(200).json(response.data);
        break;
      case 'DELETE':
        await axios.delete(API_URL);
        res.status(405).json({ message: 'Quote deleted successfully' });
        break;
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).json(`Method ${method} not supported`);
    } 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}