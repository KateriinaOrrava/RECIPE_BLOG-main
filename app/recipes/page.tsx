'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import desert from './images/public/desert.jpeg';
import drinks from './images/public/drinks.jpeg';
import main from './images/public/main.jpeg';
import snack from './images/public/snack.jpeg';
import soup from './images/public/soup.jpeg';

const Home = () => {
  return (
    <main className={styles.main}>
      <h3 title="Share your recipe" className={styles.link_header}>
        <Link href="/recipes/addRecipe">🖊️</Link>
      </h3>
      <h1 className={styles.main_header}>RECIPES</h1>

      <div className={styles.sticky_links}>
        <ul className={styles.listOfImg}>
          <li className={styles.listOfImg_element}>
            <p className={styles.linkText}>DESERTS</p>
            <Image
              src={desert}
              alt="Picture of a desert"
              width={150}
              height={150}
              className={styles.linkImg}
            />
          </li>
          <li className={styles.listOfImg_element}>
            <p className={styles.linkText}>SOUPS</p>
            <Image
              src={soup}
              alt="Picture of a soup"
              width={150}
              height={150}
              className={styles.linkImg}
            />
          </li>
          <li className={styles.listOfImg_element}>
            <p className={styles.linkText}>DRINKS</p>
            <Image
              src={drinks}
              alt="Picture of a drinks"
              width={150}
              height={150}
              className={styles.linkImg}
            />
          </li>
          <li className={styles.listOfImg_element}>
            <p className={styles.linkText}>MAINS</p>
            <Image
              src={main}
              alt="Picture of a main course"
              width={150}
              height={150}
              className={styles.linkImg}
            />
          </li>
          <li className={styles.listOfImg_element}>
            <p className={styles.linkText}>SNACKS</p>
            <Image
              src={snack}
              alt="Picture of a snack"
              width={150}
              height={150}
              className={styles.linkImg}
            />
          </li>
        </ul>
      </div>
      <h3 title="Explore recipes" className={styles.link_header}>
        <Link href="/recipes/allRecipes">📚</Link>
      </h3>
      {/* <div className={styles.recipes}><AllRecipes /></div> */}
    </main>
  );
};

export default Home;
