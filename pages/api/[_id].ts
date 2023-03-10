import { NextApiRequest, NextApiResponse } from 'next';
import Recipe from '@/utils/models/models';
import MongoConnect from '@/utils/connection';

export default async function getRecipesById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      try {
        await MongoConnect();
        const recipe = await Recipe.findOne({ _id: req.query._id });
        res.status(200).json({ data: recipe });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
