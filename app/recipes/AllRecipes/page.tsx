
import MongoConnect from '@/utils/connection';
import Recipe from '@/utils/models/models';
import { RecipeType, ResponseRecipeType } from '@/utils/types';
import { error } from 'console';
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next';
import GetRecipes from './getAllRecipes/getAllRecipes';
import styles from './page.module.css';
import Link from 'next/link';

const AllRecipes = () => {
  return (
    <div className={styles.section}>
              <h5 title="Share your recipe" className={styles.link}>
        <Link href="/recipes/addRecipe">Add 🖊️</Link>
      </h5>
      <h1>My Recipes</h1>
      {/* <GetRecipes /> */}
      <h5 className={styles.link}>
        <Link href="/recipes">HOME 🏠</Link>
      </h5>
    </div>
  );
}
export default AllRecipes