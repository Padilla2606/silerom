
import styles from "./Tarjeta.module.css";
import Image from "next/image";

interface Tarjetaprops{
    urlsvg: string;
    titulo: string;
    parrafo: string;
}


export const Tarjeta: React.FC<Tarjetaprops> = (props)=>{
    return(
        <div className={styles.Tarjeta}>
            <Image src={props.urlsvg} width={70} height={70} alt="imagen"/>
            <h1 className={styles.h1}>{props.titulo}</h1>
            <p>{props.parrafo}</p>
        </div>
    )
}

export const Cajatarjeta = ()=>{
    return(
        <>
            <h1 className={styles.titulo}>Por Donde Empezamos?</h1>
            <div className={styles.Cajatarjeta}>
                <Tarjeta titulo={"Desarrollo Web"} parrafo={"Diseños web a medida que capturan la esencia de tu negocio. Impulsa tu presencia en línea con nuestro servicio de Diseño Web creativo y funcional."} urlsvg={"/Tarjeta/webdesing.svg"}/>
                <Tarjeta titulo={"Campañas de Publicidad"} parrafo={"Llega a tu audiencia de manera efectiva con campañas publicitarias personalizadas. Maximiza tu alcance y conversión con nuestras estrategias de Publicidad en línea."} urlsvg={"/Tarjeta/marketing.svg"}/>
                <Tarjeta titulo={"Community Manager"} parrafo={"Gestión profesional de redes sociales para potenciar tu marca y conectar con tu audiencia. ¡Haz que tu presencia en línea destaque con nuestro servicio de Community Manager!."} urlsvg={"/Tarjeta/diseño.svg"}/>
            </div>
        </>
    )
} 