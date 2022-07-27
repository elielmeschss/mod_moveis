import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";

import './showcase.scss'

import GreenSofa from '../../assets/images/green-sofa.png'
import YellowSofa from '../../assets/images/yellow-sofa.png'
import BlueChair from '../../assets/images/blue-chair.png'
import BlackChair from '../../assets/images/black-chair.png'


export default function Showcase() {
    return (
        <Container>
            <Row>
                <div className="showcase-all">
                    <h2>Nossos Produtos</h2>
                    <Carousel className="desktop-showcase">
                        <Carousel.Item>
                            <div className="content-carousel-inner">
                                <div className="inner-content-pic">
                                    <img className="showcase-pic"
                                        src={GreenSofa}
                                        alt="something here" />
                                    <h3>Sofá Verde</h3>
                                    <p>R$1.896</p>
                                </div>

                                <div className="inner-content-pic">
                                    <img className="showcase-pic"
                                        src={YellowSofa}
                                        alt="something here" />
                                    <h3>Sofá Amarelo</h3>
                                    <p>R$2.689</p>
                                </div>

                                <div className="inner-content-pic">
                                    <img className="showcase-pic"
                                        src={BlueChair}
                                        alt="something here" />
                                    <h3>Cadeira Azul</h3>
                                    <p>R$998</p>
                                </div>

                                <div className="inner-content-pic">
                                    <img className="showcase-pic"
                                        src={BlackChair}
                                        alt="something here" />
                                    <h3>Cadeira Preta</h3>
                                    <p>R$696</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                    <Carousel className="mobile-showcase">
                        <Carousel.Item>
                            <div className="content-carousel-inner">
                                <div className="inner-content-pic">
                                    <img className="showcase-pic"
                                        src={GreenSofa}
                                        alt="something here" />
                                    <h3>Sofá Verde</h3>
                                    <p>R$1.896</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="content-carousel-inner">
                                <div className="inner-content-pic">
                                    <img className="showcase-pic"
                                        src={YellowSofa}
                                        alt="something here" />
                                    <h3>Sofá Amarelo</h3>
                                    <p>R$2.689</p>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="content-carousel-inner">
                                <div className="inner-content-pic">
                                    <img className="showcase-pic"
                                        src={BlueChair}
                                        alt="something here" />
                                    <h3>Cadeira Azul</h3>
                                    <p>R$998</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="content-carousel-inner">
                                <div className="inner-content-pic">
                                    <img className="showcase-pic"
                                        src={BlackChair}
                                        alt="something here" />
                                    <h3>Cadeira Preta</h3>
                                    <p>R$696</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <div className="button-more">
                        <a href="/">Veja Mais</a>
                    </div>
                </div >

            </Row >
        </Container >
    )
}