'use client';
import MongoConnect from '@/utils/connection';
import Recipe from '@/utils/models/models';
import { RecipeType } from '@/utils/types';
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next';

interface HomeProps {
  recipes: RecipeType[];
}

// const AllRecipes = ({ recipes }) => {
const AllRecipes = ({recipes}:HomeProps) => {
console.log(recipes)
  return (
    <div>
      <h1>My Recipes</h1>
      {/* recipe card */}
    </div>
  );
};
export default AllRecipes;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     console.log('CONNECTING TO MONGO');
//     await MongoConnect();
//     console.log('CONNECTED TO MONGO');

//     console.log('FETCHING DOCUMENTS');
//     const recipes = await Recipe.find();
//     console.log('FETCHED DOCUMENTS');
//     return {
//       props: {
//         recipes: JSON.parse(JSON.stringify(recipes)),
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       notFound: true,
//     };
//   }
// };
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`/api/getRecipes`);
  console.log('from getServerProps',res)
  const recipes = await res.json();
  console.log(recipes);
  // Pass data to the page via props
  return { props: { recipes } };
}
// export const getServerSideProps: GetServerSideProps = async () => {
//   // Fetch data from external API
//   const res = await fetch(`/api/GetRecipes`,{
//     method: "GET",
//     headers:{
//       'Content-Type': 'application/json',
//     }
//   });
//   console.log('from getServerProps',res)
//   let recipes = await res.json();
//   console.log(recipes);
//   // Pass data to the page via props
//   return { props: { recipes } };
// }

