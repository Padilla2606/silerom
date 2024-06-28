
import styles from "./Tarjeta.module.css";
import Image from "next/image";




export const Tarjeta = (props)=>{
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
                <Tarjeta titulo={"Diseñamos tu Web"} parrafo={"texto de prueba texto de prueba texto de prueba texto de prueba"} urlsvg={"/Tarjeta/webdesing.svg"}/>
                <Tarjeta titulo={"Te Hacemos Conocer"} parrafo={"texto de prueba texto de prueba texto de prueba texto de prueba"} urlsvg={"/Tarjeta/marketing.svg"}/>
                <Tarjeta titulo={"Creamos tu Logo"} parrafo={"texto de prueba texto de prueba texto de prueba texto de prueba"} urlsvg={"/Tarjeta/diseño.svg"}/>
            </div>
        </>
    )
} 