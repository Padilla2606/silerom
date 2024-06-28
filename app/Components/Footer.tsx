import styles from "./Footer.module.css"
import Image from "next/image";
export const Footer = ()=>{
    const tamañosvg = {
        width: 75,
        height: 75
    }
    return(
        <div className={styles.footer} id="pie">
            <div className={styles.redes}>
                <Image className={styles.svgicon} src={"/redessociales/facebook.svg"} width={tamañosvg.width} height={tamañosvg.height} alt="svg"/>
                <Image className={styles.svgicon} src={"/redessociales/instagram.svg"} width={tamañosvg.width} height={tamañosvg.height} alt="svg"/>
                <Image className={styles.svgicon} src={"/redessociales/x.svg"} width={tamañosvg.width} height={tamañosvg.height} alt="svg"/>
            </div>
            <div className={styles.info}>
                <p className={styles.p}>Silerom - Soluciones Digitales</p>
                <p className={styles.p}>+598 96 123456</p>
                <p className={styles.p}>Montevideo - Uruguay</p>
            </div>
        </div>
    )
}