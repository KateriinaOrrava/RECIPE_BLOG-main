
import { ResponseRecipeType } from '@/utils/types';

type ResponseRecipeTypeAll = {
  success: boolean;
  data: ResponseRecipeType[];
};

export const getAllRecipes = async () => {
  const res = await fetch('http://localhost:3000/api/getRecipes/');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  console.log(res);
  return res.json();
};
