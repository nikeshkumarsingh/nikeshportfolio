import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function CertificateCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" href={props.link1} target="_blank" style={{"margin":"5px"}}>
          {"View Certificate"}
        </Button>

      </Card.Body>
    </Card>
  );
}
export default CertificateCards;