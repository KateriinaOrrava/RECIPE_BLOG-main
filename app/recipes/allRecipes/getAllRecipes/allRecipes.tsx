import { RecipeType, ResponseRecipeType } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import { getAllRecipes } from './getAllRecipes';

const RecipeList = async () => {
  const { data } = await getAllRecipes();

  return (
    <section>
      <div>
        <h2>recipes</h2>

        {data &&
          data.map((r: ResponseRecipeType) => (
            <Link href={`/recipes/${r._id}`} key={r._id}>
              <p>{r.title}</p>
              <Image src={r.image} alt={''} width="300"></Image>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default RecipeList;
