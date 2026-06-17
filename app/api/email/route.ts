import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const Enviar = async (nombre: string, email: string, msjf: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "Silerom Digital Web",
    to: process.env.EMAIL_TO,
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${msjf}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #1a1a2e; color: #fff; border-radius: 10px;">
        <h2 style="color: #e94560;">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${msjf}</p>
      </div>
    `,
  });
};

const GET = () => {
  return NextResponse.json({
    data: {
      nombre: "yoiler",
      apellidos: { primero: "padilla", segundo: "rios" },
    },
  });
};

const POST = async (req: Request) => {
  try {
    const data = await req.json();
    await Enviar(data.nombre, data.email, data.mensaje);
    return NextResponse.json({ mensaje: "Mensaje enviado exitosamente" });
  } catch (error) {
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
};

export const runtime = "nodejs";

export { GET, POST };