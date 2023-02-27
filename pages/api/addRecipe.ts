import MongoConnect from '@/utils/connection';
import Recipe from '@/utils/models/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function addRecipe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('CONNECTING TO MONGO');
    await MongoConnect();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const recipe = await Recipe.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ recipe });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
