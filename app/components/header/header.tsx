"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./header.module.css"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header id="header" className={styles.header}>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a href="#header" className={styles.logoLink}>
          <Image
            className={styles.logo}
            src="/logos/logo.svg"
            width={120}
            height={120}
            alt="Silerom Digital"
            priority
          />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.navList} ${menuOpen ? styles.navListOpen : ""}`}>
          {[
            { href: "#services", label: "Nosotros" },
            { href: "#contact", label: "Contactanos" },
            { href: "#footer", label: "Social" },
          ].map((link) => (
            <li key={link.href}>
              <a
                className={styles.navLink}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Impulsamos tu Negocio</h1>
          <p className={styles.heroSubtitle}>Crece con Nosotros</p>
        </div>
      </div>

      <video className={styles.video} muted autoPlay loop playsInline>
        <source src="/vid/videofondo.mp4" type="video/mp4" />
      </video>
    </header>
  )
}
