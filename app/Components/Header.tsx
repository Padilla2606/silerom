"use client"
import styles from "./Header.module.css";


export const Header= ()=>{
    return(
        <div id="Header" className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <a className={styles.a} href="#quehacemos">Nosotros</a>
                    <a className={styles.a} href="#contacto">Contactanos</a>
                    <a className={styles.a} href="#pie">Social</a>
                </ul>
            </nav>
            <div className={styles.textpre}>
                <h1 className={styles.h1}>Crece con Nosotros</h1>
                <p className={styles.p}>Desarrollo Web</p>
            </div>
            <video muted autoPlay loop><source src="/vid/videofondo.mp4" type="video/mp4"></source></video>
        </div>
    )
};