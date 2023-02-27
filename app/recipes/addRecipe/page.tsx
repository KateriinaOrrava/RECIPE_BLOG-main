import AddRecipeForm from './addRecipeForm/addRecipeForm';
import styles from './page.module.css';
import Link from 'next/link';
const addNewRecipe = () => {
  return (
    <div className={styles.section}>
      <h3>What Is Your Secret Recipe?</h3>
      <AddRecipeForm />
      <h5 className={styles.linkHome}>
        <Link href="/recipes">HOME 🏠</Link>
      </h5>
    </div>
  );
};
export default addNewRecipe;
