// "use client"
import Link from "next/dist/client/link";
import React from "react";
import Image from 'next/image';
import axios from "axios"
import getRecipesById from "@/pages/api/[_id]";


type OneRecipe = {
    _id:string
    title: string,
    image: string,
    description: string,
    category: string,
}
// export const getAllRecipes = async () => {
//     const res = await fetch('http://localhost:3000/api/getRecipes', {next: {revalidate: 10}});
//     if (!res.ok) {
//       throw new Error('Failed to fetch');
//     }
//     console.log(res);
//     return res.json();
//   };

async function getData(_id:string): Promise<OneRecipe> {
    const res = await axios.get(`http://localhost:3000/api/${_id}`);

    if (!res){
        throw new Error ("Failed to fetch data");
    }
    return res.data; 
}


type RecipePageProps = { 
    params: {_id:string};
}
const RecipePage = async ({params}:RecipePageProps ) => { 

    const data = await getData(params._id); 
    console.log(data)

    return (

        <div>
            <Link href="/recipes">
                <button className="submit success button" style={{margin:"20px"}}>Back</button>
            </Link>
            <br />
            {/* <Image
                    alt={data.title}
                    src={data.image}
                    width={700}
                    height={700}
                     />
          
           <h1>{data.title}</h1>
           <p>{data.description}</p> */}
       {/* <DeleteRecipe _id = {data._id}/> */}
        </div>
    )
}

export default RecipePage