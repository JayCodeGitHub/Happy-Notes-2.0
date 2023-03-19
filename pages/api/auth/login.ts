import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if(req.method == "POST") {
        res.status(200).json({ message: 'Login' });
    } else {
        res.status(400).json({ message: 'Bad Request' });
    }
  }
  