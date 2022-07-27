import React from "react";

import '../styles/home.scss'

import Navebar from '../layout/Navebar/navebar'
import Marquee from "../layout/Marquee/marquee";
import Showcase from "../layout/Showcase/showcase";
import Verification from "../layout/Verification/verification";
import Newsletter from "../layout/Newsletter/newsletter";
import Footer from "../layout/Footer/footer";


export default function Home() {
    return (
        <div className="content-all">
            <Navebar />

            <div className="full-banner">
                <div className="filter-shadow"></div>

                <div className="title-banner">
                    <h1>A casa dos seus <br /> sonhos com nossos <br />produtos</h1>

                    <div className="button-buy">
                        <a href="/">Comprar Agora</a>
                    </div>
                </div>
            </div>

            <Marquee/>

            <Showcase/>

            <Verification/>

            <Newsletter/>

            <Footer/>
        </div>


    )
}