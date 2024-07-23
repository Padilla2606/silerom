"use client"
import styles from "./Formulario.module.css";
import { FormEvent } from "react";




export const Formulario = ()=>{
    async function EnviaForm(Event: FormEvent<HTMLFormElement>){
        Event.preventDefault();
        const form = new FormData(Event.currentTarget);
       
        const data = {
            nombre: `${form.get("namenombre")}`,
            email: `${form.get("nameemail")}`,
            mensaje: `${form.get("namemensaje")}`
        }
        const response = await fetch("http://localhost:1337/api/auth/local/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }

    
    return(
        <form className={styles.Formulario} id="Formularioid" onSubmit={EnviaForm}>
            <h1 className={styles.h1}>Comenzamos?</h1>
            <p className={styles.psubtitle}>Envianos un mensaje atravez del formulario y te atenderemos enseguida</p>
            <div className={styles.boxinput}>
                <div className={styles.cajitainput}><p>Nombre:</p><input className={styles.input} type="text" placeholder="Nombre" name="namenombre"/></div>
                <div className={styles.cajitainput}><p>Email:</p><input className={styles.input} type="email" placeholder="Correo@gmail.com" name="nameemail"/></div>
                <div className={styles.cajitainput}><p>Mensaje:</p><input className={styles.inputarea} type="texbox" placeholder="Mensaje" name="namemensaje"/></div>
                <button className={styles.enviar} type="submit">Enviar</button>
            </div>
        </form>
    );
};