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
    image: "https://image.thum.io/get/width/600/crop/400/https://ecommerce-two-kappa-88.vercel.app/",
    title: "E-Commerce",
    description: "Tienda online de supermercado con delivery, carrito de compras y pasarela de pagos.",
    url: "https://ecommerce-two-kappa-88.vercel.app/",
  },
  {
    image: "https://image.thum.io/get/width/600/crop/400/https://agendar-citas-blue.vercel.app/",
    title: "Agenda de Citas",
    description: "Sistema de agenda de citas online con selección de servicios, fechas y horarios.",
    url: "https://agendar-citas-blue.vercel.app/",
  },
  {
    image: "https://image.thum.io/get/width/600/crop/400/https://silerom-restaurant.vercel.app/",
    title: "Restaurante",
    description: "Sitio web para restaurante con menú digital, reservas y pedidos online.",
    url: "https://silerom-restaurant.vercel.app/",
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
        unoptimized
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
    <h2 className={styles.sectionTitle}>¿Qué deseas obtener?</h2>
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
