// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import GetGoogle from "../../lib/helpers/Google";
import Word from "../../lib/helpers/Words";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    res.status(404).json({ error: 'Message' })
  } else {
    const { keyword: query, country, language} = req.query;
    return new Promise((resolve, reject) => {
      console.log('here----country', country)
      Word.getWords(query, new GetGoogle(query, country, language).getData)
      .then((data) => {
        res.status(200).json(data)
        resolve(null);
      })
      .catch((err) => {
        res.status(400).json(err.message)
        resolve(null);
      });
    })
}
}