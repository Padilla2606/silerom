
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

const Enviar =async(nombre:string,email:string,msjf:string)=>{
    const info = {
        host:"smtp.gmail.com",
        port: 587,
        secure: false,
        auth:{
            user:"naiyobis86@gmail.com",
            pass:"uxvj yibe aaqn qoze"
        }
    }
    const msj = {
        from:"silerom digital web",
        to:"naiyobis86@gmail.com",
        subject:`nombre: ${nombre}`,
        text:` este es su mensaje:${msjf}-----este es su email:${email}`
        
    }
    const Transporte = nodemailer.createTransport(info);
    const enviado = await Transporte.sendMail(msj);
}


const GET = ()=>{
    return NextResponse.json({data:{
        nombre:"yoiler",
        apellidos:{
            primero:"padilla",
            segundo:"rios"
        }
    }});

}


const POST = async (req:any)=>{
    const datarecibido = await req.json();
    Enviar(datarecibido.nombre,datarecibido.email,datarecibido.mensaje);
    return NextResponse.json({mensaje:"conexion exitosa"})
    
}

export {GET, POST};