import type { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import Note from "../models/note";
import connectMongo from "../index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo();
  if (req.method == "GET") {
    let doc;
    const headersList = headers();
    const token = headersList.get("authorization");
    let decoded;
    let creator;
    if (token) {
      decoded = jwt.decode(token) as JwtPayload;
    }
    if (decoded) {
      creator = decoded._id;
    }

    try {
      doc = await Note.find({ creator: creator });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
    res.status(200).json(doc);
  } else if (req.method == "POST") {
    const itemType = req.body.itemType;
    const title = req.body.title;
    const body = req.body.body;
    const token = req.body.creator;
    let decoded = jwt.decode(token) as JwtPayload;
    let creator = decoded._id;

    let note;

    try {
      note = new Note({ itemType, creator, title, body });
      await note.save();
    } catch (err: any) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(note);
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
}
