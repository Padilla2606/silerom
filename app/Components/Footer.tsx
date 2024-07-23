import styles from "./Footer.module.css";
import Image from "next/image";

export const Footer = ()=>{
    const tamañosvg = {
        width: 75,
        height: 75
    }
    return(
        <div className={styles.footer} id="pie">
            <div className={styles.redes}>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=61560183749541"><Image className={styles.svgicon} src={"/redessociales/facebook.svg"} width={tamañosvg.width} height={tamañosvg.height} alt="svg"/></a>
                <a target="_blank" href="https://www.instagram.com/silerom/?igsh=YzljYTk1ODg3Zg%3D%3D"><Image className={styles.svgicon} src={"/redessociales/instagram.svg"} width={tamañosvg.width} height={tamañosvg.height} alt="svg"/></a>
                <a target="_blank" href="https://www.tiktok.com/@silerom.digital?is_from_webapp=1&sender_device=pc"><Image className={styles.svgicon} src={"/redessociales/x.svg"} width={tamañosvg.width} height={tamañosvg.height} alt="svg"/></a>
            </div>
            <div className={styles.info}>
                <p className={styles.p}>Silerom - Soluciones Digitales</p>
                <p className={styles.p}>+598 97 660555</p>
                <p className={styles.p}>Montevideo - Uruguay</p>
            </div>
        </div>
    )
}