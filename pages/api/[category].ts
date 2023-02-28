import { NextApiRequest, NextApiResponse } from 'next';
import Recipe from '@/utils/models/models';
import MongoConnect from '@/utils/connection';

export default async function getRecipesByCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  switch (req.method) {
    case 'GET':
      try {
        console.log('connecting to mongoDB');
        await MongoConnect();
        console.log('connected to mongoDB');
        const recipesByCategory = await Recipe.findOne({ category: req.query.category });
        res.status(200).json({ data: recipesByCategory });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
