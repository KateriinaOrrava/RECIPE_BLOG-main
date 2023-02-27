import MongoConnect from '@/utils/connection';
import Recipe from '@/utils/models/models';
import { NextApiRequest, NextApiResponse } from 'next';


const getRecipes = async (req: NextApiRequest, res: NextApiResponse) => {

  const { method } = req

  await MongoConnect()

  switch (method) {
    case 'GET':
      try {
        const recipes = await Recipe.find({})
        res.status(200).json({ success: true, data: recipes })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }

  // console.log('CONNECTING TO MONGO');
  // const {title, image, category, ingredients, directions, _id} = req.query;
  // if (req.method === 'GET'){
  //   await MongoConnect();
  //   console.log('CONNECTED TO MONGO');
  //   const result=Recipe.find({})
  //   res.json(result)
  // }

}

export default getRecipes;