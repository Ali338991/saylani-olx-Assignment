import React from "react";
import footer from "./Footer.css";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitterSquare,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";
import AppStore from ".././../assets/image/AppStore.png";
import GooglePlay from ".././../assets/image/GooglePlay.png";

export default function Footer() {
  return (
    <>
      <Container fluid className="footer">
        <Row className="pt-3">
          <Col className="d-flex flex-column">
            <h6>POPULAR CATEGORIES</h6>
            <Link to="/" className="Link">
              Cars
            </Link>
            <Link to="/" className="Link">
              Mobile
            </Link>
            <Link to="/" className="Link">
              Jewelry
            </Link>
            <Link to="/" className="Link">
              Clothes
            </Link>
          </Col>
          {/* ................2nd........................... */}
          <Col className="d-flex flex-column">
            <h6>TRENDING SEARCHES</h6>
            <Link to="/" className="Link">
              Tablet
            </Link>
            <Link to="/" className="Link">
              Clothes
            </Link>
            <Link to="/" className="Link">
              Cats
            </Link>
            <Link to="/" className="Link">
              Bikes
            </Link>
          </Col>
          {/* ................3nd........................... */}
          <Col>
            <h6>FOLLOW US</h6>
            <div className="d-flex flex-row">
              <Link to="/" className="SLink" to="/">
                <FaFacebook size={30} />
              </Link>
              <Link to="/" className="SLink" to="/">
                <FaTwitterSquare size={30} />
              </Link>
              <Link to="/" className="SLink" to="/">
                <FaYoutube size={30} />
              </Link>
              <Link to="/" className="SLink" to="/">
                <FaInstagramSquare size={30} />
              </Link>
            </div>
            <div className="d-flex flex-row mt-3">
              <Link to="/">
                <img src={AppStore} alt="App Store" className="StoreLink" />
              </Link>
              <Link to="/">
                <img
                  src={GooglePlay}
                  alt="Google Store"
                  className="StoreLink"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ height: "70px", backgroundColor: "#002f34" }}>
        <div className="text-white aaa">
        Free Classifieds in Pakistan . © 2020-2021 OLX
        </div>
      </div>
      <div style={{ height: "20px", backgroundColor: "white" }}>
        
      </div>
    </>
  );
}
