import styles from "./Formulario.module.css";
import Email from "../Backend/mail.service";
export const Formulario = ()=>{
    return(
        <div className={styles.Formulario} id="Formularioid">
            <h1 className={styles.h1}>Comenzamos?</h1>
            <p className={styles.psubtitle}>Envianos un mensaje atravez del formulario y te atenderemos enseguida</p>
            <div className={styles.boxinput}>
                <div className={styles.cajitainput}><p>Nombre:</p><input className={styles.input} type="text" placeholder="Nombre"/></div>
                <div className={styles.cajitainput}><p>Email:</p><input className={styles.input} type="email" placeholder="Correo@gmail.com"/></div>
                <div className={styles.cajitainput}><p>Mensaje:</p><input className={styles.inputarea} type="texbox" placeholder="Mensaje"/></div>
                <button className={styles.enviar} type="submit">Enviar</button>
            </div>
        </div>
    );
};