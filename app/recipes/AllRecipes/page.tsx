'use client';
import MongoConnect from '@/utils/connection';
import Recipe from '@/utils/models/models';
import { RecipeType } from '@/utils/types';
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next';

interface HomeProps {
  recipes: RecipeType[];
}

// const AllRecipes = ({ recipes }) => {
const AllRecipes = async () => {
  await MongoConnect();
  const result = await Recipe.find();  
  console.log(result);
  return (
    <div>
      <h1>My Recipes</h1>
      {/* recipe card */}
    </div>
  );
};

export default AllRecipes;

