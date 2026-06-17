import Image from "next/image"
import styles from "./services.module.css"

interface ServiceCardProps {
  icons: string[]
  title: string
  description: string
}

const ServiceCard = ({ icons, title, description }: ServiceCardProps) => (
  <div className={styles.card}>
    <div className={styles.cardIcons}>
      {icons.map((icon, index) => (
        <div key={index} className={styles.cardIcon}>
          <Image src={icon} width={50} height={50} alt={title} />
        </div>
      ))}
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
  </div>
)

const services: ServiceCardProps[] = [
  {
    icons: ["/Tarjeta/webdesing.svg"],
    title: "Desarrollo Web",
    description:
      "Diseños web a medida que capturan la esencia de tu negocio. Impulsa tu presencia en línea con nuestro servicio creativo y funcional.",
  },
  {
    icons: ["/Tarjeta/marketing.svg"],
    title: "Campañas de Publicidad",
    description:
      "Llega a tu audiencia de manera efectiva con campañas publicitarias personalizadas. Maximiza tu alcance y conversión.",
  },
  {
    icons: ["/Tarjeta/diseno.svg", "/Tarjeta/community.svg"],
    title: "Community Manager",
    description:
      "Gestión profesional de redes sociales para potenciar tu marca y conectar con tu audiencia. ¡Haz que tu presencia destaque!",
  },
]

export const Services = () => (
  <section id="services" className={styles.section}>
    <h2 className={styles.sectionTitle}>Por Donde Empezamos?</h2>
    <div className={styles.grid}>
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </section>
)
