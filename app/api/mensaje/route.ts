import { NextApiRequest, NextApiResponse } from "next";



const GET = ()=>{

  return Response.json({Mensaje:"usa el metodo POST"})
}


const POST = (req: NextApiRequest, res: NextApiResponse)=>{
  console.log("se activo el post")
  console.log(req.method)
  return Response.json({mensaje:"Post exitoso"});
} 




export {GET, POST};