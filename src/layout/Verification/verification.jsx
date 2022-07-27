import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

import './verification.scss'

import Quote from '../../assets/icons/quote.png'

export default function Verification() {
    return (
        <Container>
            <div className="verify-content">
                <Row>
                    <h2>Depoimentos</h2>

                    <Col className="info-inner">
                        <div className="verify-inner">
                            <img src={Quote} className="inner-quote" alt="Comment" />

                            <p className="inner-text-verify">
                                Etiam ultrices felis ex, ac bibendum purus vehicula in.
                                Phasellus vel leo sed nulla accun malesuada a in ligula.
                                Nullam interdum eque et condimentum sagittis.
                                Vivamus contetur accumsan ligula.
                            </p>

                            <div className="inner-user-comment">
                                <div className="user-info">
                                    <div className="inner-user-circle"></div>
                                    <div className="user-name">
                                        <span id="name">Léopold Duguay</span>
                                        <br />
                                        <span id="sector">Cabinetmakers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col className="info-inner">
                        <div className="verify-inner">

                            <img src={Quote} className="inner-quote" alt="Comment" />

                            <p className="inner-text-verify">
                                Etiam ultrices felis ex, ac bibendum purus vehicula in.
                                Phasellus vel leo sed nulla accun malesuada a in ligula.
                                Nullam interdum eque et condimentum sagittis.
                                Vivamus contetur accumsan ligula.
                            </p>

                            <div className="inner-user-comment">
                                <div className="user-info">
                                    <div className="inner-user-circle"></div>
                                    <div className="user-name">
                                        <span id="name">Philbert Blanchar</span>
                                        <br />
                                        <span id="sector">Furniture assembler </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col className="info-inner">
                        <div className="verify-inner">

                            <img src={Quote} className="inner-quote" alt="Comment" />

                            <p className="inner-text-verify">
                                Etiam ultrices felis ex, ac bibendum purus vehicula in.
                                Phasellus vel leo sed nulla accun malesuada a in ligula.
                                Nullam interdum eque et condimentum sagittis.
                                Vivamus contetur accumsan ligula.
                            </p>
                            <div className="inner-user-comment">
                                <div className="user-info">
                                    <div className="inner-user-circle"></div>
                                    <div className="user-name">
                                        <span id="name">Veillantif Brisbois</span>
                                        <br />
                                        <span id="sector">Furniture finishers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Container>
    )
}