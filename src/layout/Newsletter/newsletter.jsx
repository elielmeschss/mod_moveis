import React from "react";
import { Container, Row } from 'react-bootstrap';

import './newsletter.scss';

export default function Newsletter() {
    return (
        <Container>
            <Row>
                <div className="newsletter-inner">
                    <h2>Assine nossa Newsletter</h2>
                    <p>Deixe seu email abaixo e receba no seu email nossos<br/> lançamentos e promoções</p>

                    <form>
                        <input type="text" placeholder="Seu email"/>
                        <button>Assine</button>
                    </form>
                </div>
            </Row>
        </Container>
    )
}