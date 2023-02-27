import mongoose from 'mongoose';
import Recipe from './models/models';
const MongoConnect = async () => {
  mongoose.connect('mongodb://localhost:27017/recipes');
  console.log('Mongoose Connection Established');
};

export default MongoConnect;
