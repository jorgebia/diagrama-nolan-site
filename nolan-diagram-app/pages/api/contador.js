// pages/api/contador.js
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await redis.incr('respostas_total');
    return res.status(200).json({ status: 'incremented' });
  }

  if (req.method === 'GET') {
    const total = await redis.get('respostas_total');
    return res.status(200).json({ total: total || 0 });
  }

  res.status(405).end(); // Method Not Allowed
}
