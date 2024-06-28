const nodemailer = require("nodemailer");


export default async function Email (){
    const info ={
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:"naiyobis86@gmail.com",
            pass:"ruaj fmul zvpp hkav"
        }
    }
    const mensaje = {
        from:"naiyobis86@gmail.com",
        to:"naiyobis86@gmail.com",
        subject:"Email desde web Silerom-SD",
        text:"aqui va el texto del mensaje",
    }





    const transport = nodemailer.createTransport(info);

    const enviando = await transport.sendMail(mensaje);
    console.log(enviando);
}
