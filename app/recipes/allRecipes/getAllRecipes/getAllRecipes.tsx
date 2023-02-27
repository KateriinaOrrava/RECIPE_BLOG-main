import { ResponseRecipeType } from '@/utils/types';

type ResponseRecipeTypeAll = {
  success: boolean;
  data: ResponseRecipeType[];
};

const getAllRecipes = async () => {
  const res = await fetch('http://localhost:3000/api/getRecipes/');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  console.log(res);
  return res.json();
};

const {data, success} = getAllRecipes()
console.log(data)

const GetRecipes = async () => {
  // const { success, data } = await getAllRecipes();
  // console.log('fromAllRecipes', data);
  return <h1>cards here</h1>;
};

export default GetRecipes;