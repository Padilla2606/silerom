import styles from "./Contenedor.module.css";
import { Formulario } from "./Formulario";
import { Cajatarjeta } from "./Tarjeta";
export const Contenedor = ()=>{
    return(
        <>
            <div id="quehacemos" className={styles.contenedor}>
                <Cajatarjeta/>
            </div>


            <div id="contacto" className={styles.contenedor}>
                    <Formulario/>
            
            </div>
        </>
    )
}