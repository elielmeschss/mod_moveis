import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="footer-inner-content">
                    <Row>
                        <Col className="inner-brand">
                            <h5>Mod Móveis</h5>
                            <p>Somos uma empresa focada em desenvolver os melhores
                                móveis para você e sua família. Rigoroso critério na
                                escolha das matérias primas e design moderno</p>
                        </Col>

                        <Col className="inner-help footer-smal">
                            <p>Suporte</p>
                            <ul>
                                <li>LGPD</li>
                                <li>Pagamento</li>
                                <li>Entrega</li>
                                <li>Trocas e Devoluções</li>
                            </ul>
                        </Col>

                        <Col className="inner-about footer-smal">
                            <p>Institucional</p>
                            <ul>
                                <li>Home</li>
                                <li>Departamentos</li>
                                <li>Sobre</li>
                                <li>Contato</li>
                            </ul>
                        </Col>

                        <Col className="inner-media footer-smal">
                            <p>Mídias Sociais</p>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                            </ul>
                        </Col>

                    </Row>
                </div>

                <p className="copyright">Copyrights @2022 | Mod Móveis   -   Todos os direitos reservados</p>
            </Container>
        </div>
    )
}