import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

function getConfig() {
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  const to = process.env.EMAIL_TO

  if (!user || !pass || !to) {
    return null
  }

  return { user, pass, to }
}

const sendEmail = async (nombre: string, email: string, mensaje: string) => {
  const config = getConfig()
  if (!config) {
    throw new Error("Variables de entorno de email no configuradas")
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  })

  await transporter.sendMail({
    from: `"Silerom Digital" <${config.user}>`,
    to: config.to,
    replyTo: email,
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #1a1a2e; color: #fff; border-radius: 10px;">
        <h2 style="color: #e94560;">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      </div>
    `,
  })
}

const GET = () => {
  return NextResponse.json({
    data: {
      nombre: "yoiler",
      apellidos: { primero: "padilla", segundo: "rios" },
    },
  })
}

const POST = async (req: Request) => {
  try {
    const data = await req.json()

    if (!data.nombre || !data.email || !data.mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

    await sendEmail(data.nombre, data.email, data.mensaje)
    return NextResponse.json({ mensaje: "Mensaje enviado exitosamente" })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error al enviar el mensaje"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export const runtime = "nodejs"

export { GET, POST }
