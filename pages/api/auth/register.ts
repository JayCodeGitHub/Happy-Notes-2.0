import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from'bcryptjs';
import jwt  from'jsonwebtoken';
import User from "../models/user"
import connectMongo from '../index';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    connectMongo()
    if(req.method == "POST") {
      
        const email = req.body.email;
        let password = req.body.password;

         //Checking is email and password exist
         if(email == undefined ||  password == undefined) {
          console.log("Enter Email and Password")
          return res.status(400).send("Enter Email and Password");
        }

        //Checking if the user os already in the database
        const loginExist = await User.findOne({email: req.body.email});
        if(loginExist) console.log('Login already exists')
        if(loginExist) return res.status(400).send("Login already exists");

        //Checking is email and password has at least 6 characters
        if(email.length < 6 || password.length < 6){
            return res.status(400).send("Email and Password have to have at least 6 characters");
        }

        //HASH THE PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //Create a new user
        password = hashedPassword;

        let user;

        try {
          user = new User({email, password});
          await user.save();
        }catch(err: any) {
          return res.status(422).json({message: err.message});
        }
        if (process.env.TOKEN_SECRET) {
          const token = jwt.sign({_id: user.email}, process.env.TOKEN_SECRET);
          res.setHeader('auth-token',token).send(token);
        } 
    } else {
        res.status(400).json({ message: 'Bad Request' });
    }
  }
  