import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlipCard from '../component/cards/flipcard';
import NavbarComp from '../component/Navbar/Navbar';
import { useParams } from "react-router-dom";
import data from '../Resources/data.json';

function Wishes() {
    const { code } = useParams();
    var nameUser = data[code] !== undefined
    if (nameUser) {
        return (
            <React.StrictMode>
                <NavbarComp birthdayGuy = {code}/>
                <Container style={{ height: '200rm', marginTop: '7rem' }}>
                    <Row style={{ height: '200rm' }}>
                        <Col><FlipCard birthdayGuy = {data[code]}/></Col>
                        <Col><FlipCard birthdayGuy = {data[code]}/></Col>
                        <Col><FlipCard birthdayGuy = {data[code]}/></Col>
                    </Row>
                </Container>
            </React.StrictMode>

        );
    }
    else {
        return <div></div>
    }
}

export default Wishes;