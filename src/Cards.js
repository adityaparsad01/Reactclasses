import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export class Cards extends Component {
  render(props) {
    return (
      <div>
        <CardDeck className="CardDeck">
          <Card className="text-center" bg="secondary" text="white">
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>100</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Cards;
