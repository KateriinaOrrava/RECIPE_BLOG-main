import { NextApiRequest, NextApiResponse } from 'next';
import Recipe from '@/utils/models/models';
import MongoConnect from '@/utils/connection';

export default async function getRecipesById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  switch (req.method) {
    case 'GET':
      try {
        // const recipeId = req.query.id;
        // console.log('id', recipeId);
        //   console.log('connecting to mongoDB');
        await MongoConnect();
        //   console.log('connected to mongoDB');
        const recipe = await Recipe.findOne({ _id: req.query._id });
        // console.log('result is ', result);
        res.status(200).json( {data : recipe } );
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }

  //   const { id } = req.query;
  //   console.log('asked for _id=', req.query);

  //   console.log('connecting to mongoDB');
  //   MongoConnect();
  //   console.log('connected to mongoDB');
  //   console.log('searching for data mongoDB');

  //     Recipe.findOne({ _id: id })
  //       .then((data) => res.json(data))
  //       .catch((err) => res.send(err));
  //     console.log('data provided');
}

// import main from "../../lib/mongo/mongodb"
// import RecipesModel from "@/lib/mongo/schema"
// import type { NextApiRequest, NextApiResponse } from 'next'

// type GetRecipesProps = {
//     params: {_id:string};
// }

// export default  function getRecipes  (req: NextApiRequest, res: NextApiResponse){
// // console.log("data",req.referrer)
//      main().catch(err => console.log(err));
//      RecipesModel.findOne({ _id: req.query._id }).then((data)=>{
//     res.status(200).json(data)
//     console.log("Yes", data)
//    })
// }
