import React  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from '../../Resources/data.json';
import navstyle from './navbar.module.css';
function NavbarComp(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={navstyle.navcss}>
      <Container>
        <Navbar.Brand href={"/home/"+props.birthdayGuy}>HBD {data[props.birthdayGuy]}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"/wishes/"+props.birthdayGuy}>Wish card</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;