import React, { useState } from "react";
import { useEffect } from "react";
import { Button,Form, Container } from "react-bootstrap";
import { db, storage } from "../../config/FirebaseConfig";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function Sell() {
  const userId = useSelector((state) => state.AuthReducer.user.uid);

  const history = useHistory();
  const [AddName, setAddName] = useState("");
  const [AddDesc, setAddDesc] = useState("");
  const [AddPrice, setAddPrice] = useState(0);
  const [FileUrl, setFileUrl] = useState();
  const [User, setUser] = useState([]);

  const imgHandler = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref("ADImage/");
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    db.collection("userAdd")
      .add({
        AddName: AddName,
        AddDesc: AddDesc,
        AddPrice: AddPrice,
        AddFile: FileUrl,
        UserId: userId,
        
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    history.replace("/SellCheck");
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setAddName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            onChange={(e) => setAddDesc(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            onChange={(e) => setAddPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose File</Form.Label>
          <Form.Control type="file" onChange={imgHandler} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <h1>jn</h1>
    </Container>
  );
}
