
import MongoConnect from '@/utils/connection';
import Recipe from '@/utils/models/models';
import { NextRequest, NextResponse } from 'next/server';

export async function getRecipes(req: NextRequest, res: NextResponse) {
  await MongoConnect();
  const result = await Recipe.find();
  return NextResponse.json(result);
}
