import "../style/Header.css";
import "../style/style.css";
import mainLogo from "../images/icons/main_logo.png";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  const headerStyle = {
    outer: {
      background:
        "linear-gradient(90deg,rgba(55, 51, 113, 1) 0%,rgba(164, 164, 230, 1) 55%,rgba(50, 191, 219, 1) 100%)",
      width: "100vw",
      height: "60px",
      position: "sticky" as "sticky",
      top: "0",
      zIndex: "1",
    },
    color: "white",
  };
  return (
    <Navbar expand="lg" bg="dark" style={headerStyle.outer}>
      <Container>
        <Navbar.Brand href="/">
          <a href="/" id="logo">
            <img src={mainLogo} alt="" />
          </a>
        </Navbar.Brand>
        <Navbar.Brand href="/" style={headerStyle}>
          Дархан Дээд Сургууль
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={headerStyle}>
          <Nav.Link href="/news" style={headerStyle}>
            МЭДЭЭ
          </Nav.Link>
          <Nav.Link href="/contact" style={headerStyle}>
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
          <Nav.Link href="#link" style={headerStyle}>
            Бидний тухай
          </Nav.Link>
          <Nav.Link href="#link" style={headerStyle}>
            Элсэлт
          </Nav.Link>
          <Nav.Link href="#link" style={headerStyle}>
            Эрдэм шинжилгээ
          </Nav.Link>
          <Nav.Link href="#link" style={headerStyle}>
            Төгсөгчид
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
