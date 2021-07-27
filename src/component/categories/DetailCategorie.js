import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import Style from "./Style.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import Footer from "../commonComponent/footer/Footer";

export default function DetailCategorie() {
  const photoURL = useSelector((state) => state.AuthReducer.user.photoURL);
  const Name = useSelector((state) => state.AuthReducer.user.displayName);
  const JoiningDate = useSelector(
    (state) => state.AuthReducer.user.metadata.creationTime
  );

  const [HeartIcon, setHeartIcon] = useState(false);
  const Heart = () => {
    setHeartIcon(!HeartIcon);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { id } = useParams();
  // console.log(id);

  return (
    <div>
      <Container fluid className="px-5">
        <Row>
          <Col xs={12} md={6} lg={7} className="asd  ">
            <div className="bg-info">
              <Carousel
               
                activeIndex={index}
                onSelect={handleSelect}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-height"
                    src=""
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-height"
                    src={photoURL}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-height"
                    src={photoURL}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            {/* Detail Area */}

            <Card className="border border-secondary bg-danger mt-2 ">
              <Card.Body>
                <div>
                  <Card.Title className="">Details</Card.Title>
                  <Row>
                    <Col xs={12} lg={6}>
                      <h6>Price</h6>
                      <h6 style={{ position: "absolute", right: 80, top: 0 }}>
                        600
                      </h6>
                    </Col>
                    <Col xs={12} lg={6}>
                      <h6>Condition</h6>
                      <h6 style={{ position: "absolute", right: 80, top: 0 }}>
                        New
                      </h6>
                    </Col>
                  </Row>
                </div>
                <hr />

                <div>
                  <Card.Title className="">Description</Card.Title>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/*................ 2nd Column................ */}
          <Col md={6} xs={12} lg={5} className="S mt-2 mt-md-0">
            <Card className="D-Card-h border border-secondary">
              <Card.Body>
                <Card.Title className="D-Card-T">Rs 16000</Card.Title>

                <div className="HeartIcon">
                  <FiShare2 size={30} style={{ marginRight: 10 }} />

                  {HeartIcon ? (
                    <FaHeart size={30} onClick={() => Heart()} />
                  ) : (
                    <FaRegHeart size={30} onClick={() => Heart()} />
                  )}
                </div>

                <Card.Subtitle className=" text-muted d-block text-truncate">
                  Room Air Cooler National Icebox full-size
                </Card.Subtitle>
                <Card.Subtitle className="card-loc text-muted">
                  Al Rehman Garden, Lahore
                </Card.Subtitle>
                <Card.Subtitle className="card-date text-muted">
                  1 month ago
                </Card.Subtitle>
              </Card.Body>
            </Card>
            {/* ...........Seller Card............. */}
            <Card className="S-Card-h border border-secondary">
              <Card.Body>
                <Card.Title className="S-Card-T">Seller Description</Card.Title>

                <Row>
                  <Col lg={2}>
                    <img src={photoURL} alt="Img" className="S-Card-img" />
                  </Col>

                  <Col lg={10}>
                    <Card.Title className="ml-2 mt-1">{Name}</Card.Title>
                    <Card.Subtitle className="S-Card-JoiningDate text-muted">
                      {JoiningDate}
                    </Card.Subtitle>
                  </Col>
                </Row>
                <Button variant="secondary" className="btn-block mt-2">
                  Chat with Seller
                </Button>
              </Card.Body>
            </Card>

            {/* Add Area */}
            <Card className="border border-secondary AddArea mt-2 ">
              <Card.Body>
                <Card.Title className="text-center  justify-content-end">
                  Add Area
                  <div className=""></div>
                </Card.Title>
              </Card.Body>
            </Card>
            {/* Add 2
           <Card className="border border-secondary bg-warning mt-2 h-50">
            <Card.Body>
              <Card.Title className="text-center text-white justify-content-end">
                Add Area
              </Card.Title>
            </Card.Body>
          </Card>           */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
