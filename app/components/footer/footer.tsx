import Image from "next/image"
import styles from "./footer.module.css"

const socialLinks = [
  { href: "https://www.facebook.com/profile.php?id=61560183749541", icon: "/redessociales/facebook.svg", label: "Facebook" },
  { href: "https://www.instagram.com/silerom/", icon: "/redessociales/instagram.svg", label: "Instagram" },
  { href: "https://www.tiktok.com/@silerom.digital", icon: "/redessociales/tiktok.svg", label: "TikTok" },
]

export const Footer = () => (
  <footer id="footer" className={styles.footer}>
    <div className={styles.socialLinks}>
      {socialLinks.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <Image src={link.icon} width={32} height={32} alt={link.label} />
        </a>
      ))}
    </div>

    <div className={styles.info}>
      <p className={styles.brand}>Silerom - Soluciones Digitales</p>
      <p className={styles.detail}>+598 96 238818</p>
      <p className={styles.detail}>Montevideo - Uruguay</p>
    </div>
  </footer>
)
