import React from 'react';
import OLxLogo from '../../component/assets/image/OlxLogo.png';
import { Card, Button } from "react-bootstrap";


export default function AddCategories() {
    return (
        <div>
            <Card className="card-s">
                <Card.Img variant="top" src={OLxLogo} className="card-img bg-danger"/>
                <Card.Body>
                    <Card.Title>970</Card.Title>                   
                    <Card.Subtitle className=" text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Subtitle className="card-loc text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Subtitle className="card-date text-muted">Card Subtitle</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}
