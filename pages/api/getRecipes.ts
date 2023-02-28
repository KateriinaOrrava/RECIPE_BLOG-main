import MongoConnect from '@/utils/connection';
import Recipe from '@/utils/models/models';
import { NextApiRequest, NextApiResponse } from 'next';
export const revalidate = 60;

const getRecipes = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await MongoConnect();

  switch (method) {
    case 'GET':
      try {
        const recipes = await Recipe.find({});
        res.status(200).json({ success: true, data: recipes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default getRecipes;
