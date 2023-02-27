'use client';
import styles from './addRecipeForm.module.css';
import { useState } from 'react';
import { RecipeType } from '@/utils/types';
import MongoConnect from '@/utils/connection';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let newRecipe:RecipeType = {
      title: title,
      category: category,
      ingredients: ingredients,
      directions: directions,
      image: image,
    };

    console.log(newRecipe);
    setTitle('');
    setImage('');
    setCategory('');
    setIngredients('');
    setDirections('');
    createRecipe(newRecipe);
  };
  const createRecipe = async (newRecipe: RecipeType) => {
    console.log('from create recipe', newRecipe);
    const res = await fetch('/api/addRecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        category: category,
        ingredients: ingredients,
        directions: directions,
        image: image,
      }),
    });
    const data = await res.json();
    console.log(data.recipe);
  };

  return (
    <div className={styles.container_for_add_recipe}>
      <form onSubmit={handleSubmit} className={styles.addNewRecipeForm}>
        <label htmlFor="title" className={styles.inputLabel}>
          Name Of Your Recipe
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={title}
          className={styles.inputField}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="category" className={styles.inputLabel}>
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          required
          value={category}
          className={styles.inputField}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label htmlFor="directions" className={styles.inputLabel}>
          Directions
        </label>
        <input
          type="text"
          id="directions"
          name="directions"
          required
          value={directions}
          className={styles.inputField}
          onChange={(e) => setDirections(e.target.value)}
        />

        <label className={styles.inputLabel} htmlFor="ingredients">
          Ingredients
        </label>
        <input
          type="text"
          id="ingredients"
          name="ingredients"
          required
          value={ingredients}
          className={styles.inputField}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <label htmlFor="image" className={styles.inputLabel}>
          Image
        </label>
        <input
          type="text"
          id="image"
          name="image"
          required
          value={image}
          className={styles.inputField}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit" className={styles.inputSubmit}>
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
