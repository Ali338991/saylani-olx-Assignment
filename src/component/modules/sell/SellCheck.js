import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../../config/FirebaseConfig";

export default function SellCheck() {
  const [loading, setLoading] = useState(false);
  const [User, setUser] = useState([]);

  if (loading) {
    return (
      <div>
        <p>loading ...</p>
      </div>
    );
  }
  //   useEffect(() => {
  //     fetchUser();
  //   }, []);

  const fetchUser = async () => {
    const userCollection = await db.collection("userAdd").get();
    setUser(
      userCollection.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };

  return (
    <div>
      <button onClick={() => fetchUser()}>call</button>
      <Container>
        <Row>
          {User.map((user) => {
            const { id,UserId, AddName, AddFile, AddPrice, AddDesc } = user;
            return (
              <Col md={4} xs={6} lg={3} className="mt-3 ">
                <Link to={`/detail/${UserId}`} className="text-decoration-none">
                  <Card className="card-s border border-secondary">
                    <Card.Img
                      variant="top"
                      src={AddFile}
                      className="card-img bg-secondary border-bottom-1"
                    />
                    <Card.Body>
                      <Card.Title>{id}$</Card.Title>
                      <Card.Subtitle className=" text-muted d-block text-truncate">
                        {AddName}
                      </Card.Subtitle>
                      <Card.Subtitle className="card-loc text-muted">
                        {AddDesc}
                      </Card.Subtitle>
                      <Card.Subtitle className="card-date text-muted">
                        {UserId}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
