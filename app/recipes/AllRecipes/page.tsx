import styles from './page.module.css';
import Link from 'next/link';
import RecipeList from './getAllRecipes/allRecipes';

const AllRecipes = () => {
  return (
    <div className={styles.section}>
      <h5 title="Share your recipe" className={styles.link}>
        <Link href="/recipes/addRecipe">Add 🖊️</Link>
      </h5>
      <h1>My Recipes</h1>
      {/* @ts-ignore */}
      <RecipeList />
      <h5 className={styles.link}>
        <Link href="/recipes">HOME 🏠</Link>
      </h5>
    </div>
  );
};
export default AllRecipes;
