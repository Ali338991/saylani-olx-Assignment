import {CategoriesHook} from "./CategoriesHook";
import React, { useState } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Style from './Style.css';
import { FaHeart, FaRegHeart } from "react-icons/fa";





function Products(params) {
  const [HeartIcon, setHeartIcon] = useState(false);
  const Heart =(id)=>{
    if (id) {
      console.log(id)
    setHeartIcon(!HeartIcon)

      
    }
  }
const [products,loading] = CategoriesHook()

// start of views / user view
// console.log("products",products);
 if(loading){
     return <div> <p>loading ...</p></div>
 }
  return (
  <>
 


       <div className="main">
      <Container fluid className="px-5" >
        <Row>
          {products.map((product) => {
            const {id,title,image,price,category}=product;
            return (
              <Col md={4} xs={6} lg={3} className="mt-3 ">
                
                <Link  to={`/detail/${id}`}  className="text-decoration-none">

                <Card className="card-s border border-secondary">
                <Card.Img variant="top" src={image} className="card-img bg-secondary border-bottom-1"/>
                <Card.Body>
                    <Card.Title>{price}$</Card.Title> 
                    <Link className="HeartIcon">
                {HeartIcon ? (
                  <FaHeart size={30} onClick={()=>Heart(id)} />
                ) : (
                  <FaRegHeart size={30} onClick={()=>Heart(id)} />
                )}
              </Link>                  
                    <Card.Subtitle className=" text-muted d-block text-truncate">{title}</Card.Subtitle>
                    <Card.Subtitle className="card-loc text-muted">{category}</Card.Subtitle>
                    <Card.Subtitle className="card-date text-muted">{id}</Card.Subtitle>
                </Card.Body>
            </Card>
                </Link>


              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
         </>
         
         );
}
// end of views
export default Products;
