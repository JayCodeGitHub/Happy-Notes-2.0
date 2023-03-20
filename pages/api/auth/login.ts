import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from'bcryptjs';
import jwt  from'jsonwebtoken';
import User from '../models/user'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if(req.method == "POST") {
        const email = req.body.email;
        let password = req.body.password;

        console.log(email, password)
        
        res.setHeader('auth-token', "efbe").send("earbwerb");
    } else {
        res.status(400).json({ message: 'Bad Request' });
    }
  }
  