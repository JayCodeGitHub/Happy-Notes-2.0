import type { NextApiRequest, NextApiResponse } from 'next'
import jwt, { JwtPayload } from "jsonwebtoken";
import connectMongo from '../index';

interface NextApiRequestWithUser extends NextApiRequest {
    user?: any;
}


export default async function handler(
    req: NextApiRequestWithUser,
    res: NextApiResponse
  ) {
    connectMongo()
    
    if(req.method == "GET") {

        const { headers } = req;
        const token = headers.authorization;
        if(!token) return res.status(401).send('Access Denied');
    
        try {
            if (process.env.TOKEN_SECRET) {
                const verified = jwt.verify(token, process.env.TOKEN_SECRET);
                req.user = verified;
              } 
        }catch(err){
            res.status(400).send('Invalid Token')
        }

        let decoded;
        if (token) {
            decoded = jwt.decode(token) as JwtPayload;
          }
          let creator;
          if (decoded) {
            creator = decoded.email;
          }
          if (process.env.TOKEN_SECRET) {
            const newToken = jwt.sign({_id: creator}, process.env.TOKEN_SECRET);
            res.status(200).send(newToken);
          } 
    } else {
        res.status(400).json({ message: 'Bad Request' });
    }
  }
  