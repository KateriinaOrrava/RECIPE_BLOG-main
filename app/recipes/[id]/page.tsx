import { ResponseRecipeType } from '@/utils/types';
import Link from 'next/dist/client/link';
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';


async function getData(_id: string) {
  const res = await fetch(`http://localhost:3000/api/${_id}`);
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
    <div className={styles.section}>
      <Link href="/recipes">
        <button className={styles.button}>HOME</button>
      </Link>
      <Link href="recipes/allRecipes">
        <button className={styles.button}>ALL RECIPES</button>
      </Link>
      <br />
      <h1>hello, let us see the recipe ...</h1>
      <div className={styles.recipe} key={_id}>
        <h1>{title}</h1>
        <br />
        <p>{category}</p>
        <br />
        <p>{directions}</p>
        <br />
        <p>{ingredients}</p>
        <br />
        <p>{image}</p>      
      </div>

      <Image
                    alt={title}
                    src={image}
                    width={700}
                    height={700}
                     />


      {/* <DeleteRecipe _id = {data._id}/> */}
    </div>
  );
};

export default RecipePage;
