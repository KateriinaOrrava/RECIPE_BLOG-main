import Link from 'next/dist/client/link';
import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import { ResponseRecipeType } from '@/utils/types';

// export const getAllRecipes = async () => {
//     const res = await fetch('http://localhost:3000/api/getRecipes', {next: {revalidate: 10}});
//     if (!res.ok) {
//       throw new Error('Failed to fetch');
//     }
//     console.log(res);
//     return res.json();
//   };

async function getData(_id: string) {
  const res = await fetch(`http://localhost:3000/api/${_id}`);
  //   console.log('this is what we got from BE',res)
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

type RecipePageProps = {
  params: { id: string };
};
const RecipePage = async ({ params }: RecipePageProps) => {
  const { data } = await getData(params.id);
  const { _id, title, category, ingredients, directions, image } = data;
  return (
    <div>
      <Link href="/recipes">
        <button className="back_button">HOME</button>
      </Link>
      <Link href="/recipes">
        <button className="back_button">ALL RECIPES</button>
      </Link>
      <br />
      <h1>hello, let us see the recipe ...</h1>
      <h1>{title}</h1>
      <p>{category}</p>
      <p>{directions}</p>
      <p>{image}</p>
      <p>{ingredients}</p>
      {/* <Image
                    alt={title}
                    src={image}
                    width={700}
                    height={700}
                     /> */}
          

           <p>{data.description}</p> */}
      {/* <DeleteRecipe _id = {data._id}/> */}
    </div>
  );
};

export default RecipePage;
