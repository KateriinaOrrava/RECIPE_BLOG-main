
import { ResponseRecipeType } from '@/utils/types';
import { Suspense } from 'react';
import Link from 'next/link';
import { getAllRecipes } from './getAllRecipes';
import styles from './getAllRecipes.module.css';

const RecipeList = async () => {
  const { data }= await getAllRecipes();
  console.log(data)
  return (
    <>
   {/* <Suspense fallback={<Loading />}> */}
      <div className={styles.allRecipeCards}>
        {data &&
          data.map((r: ResponseRecipeType) => (
            // <Link href={`/${_id}`} className={styles.button}>
            <Link href={`/recipes/${r._id}`} key={Math.random()}>
              <div key={Math.random()} className={styles.allRecipeCard}>
                <p>{r.title}</p>
              </div>
            </Link>
          ))}
      </div>
      {/* </Suspense> */}
    </>
  );
};

export default RecipeList;
// function Loading() {
//   return <h2>🌀 Loading...</h2>;
// }