import Image from "next/image"
import styles from "./portfolio.module.css"

interface PortfolioItem {
  image: string
  title: string
  description: string
  url: string
}

const portfolio: PortfolioItem[] = [
  {
    image: "/portfolio/proyecto1.jpg",
    title: "E-Commerce Moda",
    description: "Tienda online de ropa con diseño moderno y pasarela de pagos integrada.",
    url: "https://ejemplo1.com",
  },
  {
    image: "/portfolio/proyecto2.jpg",
    title: "Restaurante Gourmet",
    description: "Sitio web para restaurante con menú digital, reservas y pedidos online.",
    url: "https://ejemplo2.com",
  },
  {
    image: "/portfolio/proyecto3.jpg",
    title: "Clínica Dental",
    description: "Portal de pacientes con sistema de turnos online y galería de servicios.",
    url: "https://ejemplo3.com",
  },
]

const PortfolioCard = ({ image, title, description, url }: PortfolioItem) => (
  <a
    className={styles.card}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={styles.imageContainer}>
      <Image
        src={image}
        alt={title}
        fill
        className={styles.image}
      />
      <div className={styles.overlay}>
        <span className={styles.viewLink}>Ver sitio →</span>
      </div>
    </div>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </a>
)

export const Portfolio = () => (
  <section id="portfolio" className={styles.section}>
    <h2 className={styles.sectionTitle}>Nuestros Trabajos</h2>
    <p className={styles.subtitle}>
      Ejemplos de sitios web que hemos creado para nuestros clientes
    </p>
    <div className={styles.grid}>
      {portfolio.map((item) => (
        <PortfolioCard key={item.title} {...item} />
      ))}
    </div>
  </section>
)
