import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../index";
import Note from "../models/note";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo();
  if (req.method == "DELETE") {
    try {
      const {_id} = req.query;
      await Note.deleteOne({_id: _id});
  } catch(err:any) {
      return res.status(422).json({message: err.message});
  }
  res.status(204).end();
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
}
