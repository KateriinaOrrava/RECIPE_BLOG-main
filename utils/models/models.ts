import mongoose, { models, Schema, model } from 'mongoose';

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  directions: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

//if we have model already or if we don't have it
const Recipe = models.Recipe || model('Recipe', recipeSchema);
// const Recipe = models.Recipe || model('Recipe', recipeSchema);

export default Recipe;
// 'desert' || 'soup' || 'drink' || 'snack' || 'main'
