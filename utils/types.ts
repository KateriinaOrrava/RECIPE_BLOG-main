// Interface to defining our object of response functions
export interface ResponseFunction {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

// Interface to define our Todo model on the frontend
export interface RecipeType {
  _id?: number;
  title: String;
  category: String;
  ingredients: String;
  directions: String;
  image: String;
}
