import {
  Container,
  Button,
  Nav,
  FormControl,
  Navbar,
  NavDropdown,
  InputGroup,
} from "react-bootstrap";
import { FaRocketchat, FaBook } from "react-icons/fa";

import { Link } from "react-router-dom";
import OlxLogo from "../../assets/image/OlxLogo.png";
import "./Navigation.css";
import { FaSistrix } from "react-icons/fa";
import LoginComponent from "./LoginComponent";
import arrowPic from "../../assets/image/arrowPic.svg";

import LoginModal from "./LoginModal";
import {useSelector, useDispatch} from "react-redux";
import { doLogout } from "../../store/actions/AuthActions";

function NavigationBar() {
  // const photoURL = useSelector((state) => state.AuthReducer.user.photoURL);

  const authState = useSelector((state) => state.AuthReducer.isUserLoggedIn);
 const dispatch = useDispatch()

  const logoutOnCLick = ()=>{

    dispatch(doLogout())


  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="main-width ">
          <Navbar.Brand>
            <Link to="/">
              <img
                className="img-1"
                src={OlxLogo}
                width="40" // height="40"
                alt="Olx Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <InputGroup className="border border-dark rounded input-1">
                <Button
                  variant="outline-secondary"
                  className="border-0"
                  id="button-addon1"
                >
                  <FaSistrix size={25} style={{ fill: "black" }} />
                </Button>
                <FormControl
                  className="border-0"
                  placeholder="Search city,area"
                />
              </InputGroup>

              <InputGroup className="border border-dark rounded input-2">
                <FormControl
                  className="border-0"
                  placeholder="Finds Cars, Mobile Phones and more"
                />
                <Button
                  variant="outline-secondary"
                  className="border-0 bg-dark"
                  id="button-addon1"
                >
                  <FaSistrix size={25} style={{ fill: "white" }} />
                </Button>
              </InputGroup>

              {authState ? <LoginComponent/> : <LoginModal />}

            
             




              <Link to="/Sell" className="Sell-btn-a">
                <Button className="  Sell-btn "> SELL</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
