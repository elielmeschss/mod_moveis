import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

import './marquee.scss'

import Shield from '../../assets/icons/shield.png'
import Location from '../../assets/icons/location.png'
import Phone from '../../assets/icons/phone.png'

import Chair from '../../assets/icons/chair.png'
import Sofa from '../../assets/icons/sofa.png'
import Lamp from '../../assets/icons/lamp.png'
import Table from '../../assets/icons/table.png'
import Dresser from '../../assets/icons/dresser.png'
import Accessories from '../../assets/icons/accessories.png'



export default function Marquee() {
    return (
        <Container>
            <Row>
                <Col className="inner-content-marquee">
                    <div className="content-marquee high-quality">
                        <img src={Shield} alt="" />
                        <div className="inner-info">
                            <h4>Alta Qualidade</h4>
                            <span>Produtos produzidos com as melhores matérias primas</span>
                        </div>
                    </div>
                </Col>

                <Col className="inner-content-marquee">
                    <div className="content-marquee free-shipping">
                        <img src={Location} alt="" />
                        <div className="inner-info">
                            <h4>Frete Grátis</h4>
                            <span>Receba grátis na sua casa em qualquer lugar do país</span>
                        </div>
                    </div>
                </Col>

                <Col className="inner-content-marquee">
                    <div className="content-marquee help-desk">
                        <img src={Phone} alt="" />
                        <div className="inner-info">
                            <h4>Atendimento</h4>
                            <span>Um pós venda ativo maximizando sua satisfação</span>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <div className="ruler-service">
                    <h2>Departamentos</h2>

                    <div className="ruler-list">
                        <ul>
                            <li>
                                <img src={Chair} alt="" />
                                <span>Cadeira</span>
                            </li>
                            <li>
                                <img src={Sofa} alt="" />
                                <span>Sofá</span>
                            </li>
                            <li>
                                <img src={Lamp} alt="" />
                                <span>Iluminação</span>
                            </li>
                            <li>
                                <img src={Table} alt="" />
                                <span>Mesa</span>
                            </li>
                            <li>
                                <img src={Dresser} alt="" />
                                <span>Armário</span>
                            </li>
                            <li>
                                <img src={Accessories} alt="" />
                                <span>Acessórios</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Row>
        </Container>
    )
}