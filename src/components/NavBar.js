import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function NavBar({ isLoggedIn, email }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark">
      <Container>
        <img
          src={require("../images/Search & Offer-logos_white.png")}
          className="logo"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="light">
          <Nav className="mx-auto light">
            <Nav.Link href="/">Home </Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Link href="/add">New Ads</Nav.Link>
          </Nav>
          <Nav>
           
              <>
                <Nav.Link eventKey={3} href="/inbox">
                  Inbox
                </Nav.Link>
                
               
              </>
            
              <>
                <Nav.Link href="/sign-up">SIGN UP</Nav.Link>
                <Nav.Link eventKey={2} href="/login">
                  LOGIN
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>LOGOUT</Nav.Link>
              </>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
