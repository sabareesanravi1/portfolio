import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">SR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#technologies">Technologies</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Coding Profiles
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mentoring</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Interests
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Download Resume</Nav.Link>
            <Nav.Link eventKey={2} href="https://www.linkedin.com/in/sabareesan-ravi/">
            <img
              alt=""
              src={ require("./resources/logos/linkedin.png")}
              width="25"
              height="25"
              className="d-inline-block align-center"
            />
            </Nav.Link>
            <Nav.Link eventKey={2} href="mailto:sabareesanravi22@gmail.com">
            <img
              alt=""
              src={ require("./resources/logos/gmail.png")}
              width="25"
              height="25"
              className="d-inline-block align-center"
            />
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://github.com/sabareesanravi1">
            <img
              alt=""
              src={ require("./resources/logos/github.png")}
              width="25"
              height="25"
              className="d-inline-block align-center"
            />
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://stackoverflow.com/users/12965498/sabby">
            <img
              alt=""
              src={ require("./resources/logos/stack-overflow.png")}
              width="25"
              height="25"
              className="d-inline-block align-center"
            />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;