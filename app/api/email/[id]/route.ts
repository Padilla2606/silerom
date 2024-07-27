import { NextResponse } from "next/server";


const GET = async (req:any, {params}:any)=>{
    const id = params.id
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method:"GET",
        headers:{
            "Content-Type": "application/json"
        }
    });
    const dataparset = await data.json();
    return NextResponse.json({data:dataparset})

}

export {GET}