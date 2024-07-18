"use client"
import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";


export const Header= ()=>{
    const [ estado, setEstado ] = useState(false);
    
    return(
        <div id="Header" className={styles.header}>
            

            <nav className="nav">
                <Image className="logo" src={"/logos/logo.svg"} width={175} height={175} alt="logo-sile"></Image>
                <button onClick={()=>{
                    setEstado(!estado);
                }} className="ham">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                </button>

                <ul className={`ul ${estado ? "ula" : ""}`}>
                    <a className="a" href="#quehacemos">Nosotros</a>
                    <a className="a" href="#contacto">Contactanos</a>
                    <a className="a" href="#pie">Social</a>
                </ul>
            </nav>


            <div className={styles.textpre}>
                <div className={styles.oscurece_video}></div>
                <h1 className={styles.h1}>Crece con Nosotros</h1>
                <p className={styles.p}>Desarrollo Web</p>
                
                
            </div>
            <video muted autoPlay loop><source src="/vid/videofondo.mp4" type="video/mp4"></source></video>
            
                
            
        </div>
    )
};