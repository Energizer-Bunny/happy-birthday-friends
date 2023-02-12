import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlipCard from '../component/cards/flipcard';
import NavbarComp from '../component/Navbar/Navbar';

function Wishes() {
    return (
        <React.StrictMode>
            <NavbarComp/>
            <Container style={{height:'200rm' , marginTop:'7rem'}}>
            <Row style={{height:'200rm'}}>
                <Col style={{height:'200rm'}}><FlipCard /></Col>
                <Col><FlipCard /></Col>
                <Col><FlipCard /></Col>
            </Row>
        </Container>
        </React.StrictMode>
        
    );
}

export default Wishes;