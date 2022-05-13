import "../style/Header.css";
import "../style/style.css";
import mainLogo from "../images/icons/main_logo.png";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  const style = {
    color: "white",
    bg: {
      width: "100vw",
    },
  };
  return (
    <Navbar expand="lg" bg="dark" style={style.bg}>
      <Container>
        <Navbar.Brand href="#home">
          <a href="/" id="logo">
            <img src={mainLogo} alt="" />
          </a>
        </Navbar.Brand>
        <Navbar.Brand href="/" style={style}>
          Дархан Дээд Сургууль
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={style}>
          <Nav.Link href="/news" style={style}>
            МЭДЭЭ
          </Nav.Link>
          <Nav.Link href="#link" style={style}>
            БАГШ НАР
          </Nav.Link>
          <NavDropdown
            title="Dropdown "
            id="basic-nav-dropdown"
            className="d-md-none text-dark"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" style={style}>
            Бидний тухай
          </Nav.Link>
          <Nav.Link href="#link" style={style}>
            Элсэлт
          </Nav.Link>
          <Nav.Link href="#link" style={style}>
            Эрдэм шинжилгээ
          </Nav.Link>
          <Nav.Link href="#link" style={style}>
            Төгсөгчид
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
