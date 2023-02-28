import { ResponseRecipeType } from '@/utils/types';

type ResponseRecipeTypeAll = {
  success: boolean;
  data: ResponseRecipeType[];
};
// :Promise<ResponseRecipeType[]>
export const getAllRecipes = async () => {
  const res = await fetch('http://localhost:3000/api/getRecipes', {next: {revalidate: 10}});
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  console.log(res);
  return res.json();
};
