import React from "react"
import { Link } from 'react-router-dom'

import './navebar.scss'

import search from '../../assets/icons/search.png'
import bag from '../../assets/icons/bag.png'
import login from '../../assets/icons/login.png'

export default function Navebar() {
    return (
        <div className="nav-header">
            <div className="logo-title">
                <h5>Mod Móveis</h5>
            </div>

            <div className="menu">
                <ul>
                    <Link to='#'>Inicio</Link>
                    <Link to='#'>Departamentos</Link>
                    <Link to='#'>Sobre</Link>
                    <Link to='#'>Contato</Link>
                </ul>
            </div>

            <div className="icons-nav">
                <img src={search} alt="Busca" />
                <img src={bag} alt="Sacola" />
                <img src={login} alt="Login" />
            </div>
        </div>
    )
}