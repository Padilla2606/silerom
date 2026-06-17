"use client"

import { FormEvent, useState } from "react"
import styles from "./contact.module.css"

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const form = new FormData(e.currentTarget)
    const data = {
      nombre: form.get("nombre") as string,
      email: form.get("email") as string,
      mensaje: form.get("mensaje") as string,
    }

    try {
      await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      alert(`${data.nombre}, tu mensaje se envió con éxito`)
      ;(e.target as HTMLFormElement).reset()
    } catch {
      alert("Error al enviar el mensaje. Intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Comenzamos?</h2>
        <p className={styles.subtitle}>
          Envíanos un mensaje a través del formulario y te atenderemos enseguida
        </p>

        <div className={styles.fields}>
          <div className={styles.field}>
            <label className={styles.label}>Nombre</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Tu nombre"
              name="nombre"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              placeholder="tu@email.com"
              name="email"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Mensaje</label>
            <textarea
              className={styles.textarea}
              placeholder="Escribe tu mensaje..."
              name="mensaje"
              required
            />
          </div>

          <button className={styles.submitBtn} type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </div>
      </form>
    </section>
  )
}
