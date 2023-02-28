import { NextApiRequest, NextApiResponse } from 'next';
import Recipe from '@/utils/models/models';
import MongoConnect from '@/utils/connection';

export default function getRecipesById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  console.log('connecting to mongoDB');
  MongoConnect();
  console.log('connected to mongoDB');
  console.log('searching for data mongoDB');

  Recipe.findOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
  console.log('data provided');
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
