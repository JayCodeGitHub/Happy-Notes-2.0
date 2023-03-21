import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from'bcryptjs';
import jwt  from'jsonwebtoken';
import User from '../models/user'
import connectMongo from '../index';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    connectMongo()
    if(req.method == "POST") {
      //Checking if the email exists
      const user = await User.findOne({email: req.body.email});
      if (!user) return res.status(400).send('Email or password is wrong!');

      //Checking if the PASSWORD IS CORRECT
      if ( user.password) {
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send('Email or password is wrong');
      } 

      //Create and assign a token
      if (process.env.TOKEN_SECRET) {
        const token = jwt.sign({_id: user.email}, process.env.TOKEN_SECRET);
        res.setHeader('auth-token',token).send(token);
      } 

    } else {
        res.status(400).json({ message: 'Bad Request' });
    }
  }
  