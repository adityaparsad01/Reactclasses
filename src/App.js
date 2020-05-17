import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Columns from "react-columns";
import Form from "react-bootstrap/Form";
import "./App.css";

function App() {
  const [Latest, setLatest] = useState([]);
  const [result, setResult] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  useEffect(() => {
    axios
      .all([
        axios.get("https://disease.sh/v2/all?yesterday=true&allowNull=true"),
        axios.get(
          "https://disease.sh/v2/countries?yesterday=true&allowNull=true"
        ),
      ])

      .then((res) => {
        setLatest(res[0].data);
        setResult(res[1].data);
        // console.log(res[1].data[93]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const filterCountries = result.filter((item) => {
    return searchCountries !== ""
      ? item.country.includes(searchCountries)
      : item;
  });

  const date = new Date(parseInt(Latest.updated));
  const lastUpdate = date.toString();

  const countries = filterCountries.map((data, i) => {
    return (
      <Card
        key={i}
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today Cases {data.todayCases}</Card.Text>
          <Card.Text>Today Deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  var queries = [
    {
      columns: 2,
      query: "min-width: 500px",
    },
    {
      columns: 3,
      query: "min-width: 1000px",
    },
  ];

  return (
    <div>
      <CardDeck>
        <Card bg="Warning" className="text-center" text={"black"}>
          <Card.Body>
            <Card.Title>Total</Card.Title>
            <Card.Text>{Latest.cases}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Latest Update: {lastUpdate}</small>
          </Card.Footer>
        </Card>
        <Card bg="Danger" className="text-center" text={"black"}>
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>{Latest.deaths}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Latest Update: {lastUpdate}</small>
          </Card.Footer>
        </Card>
        <Card bg="Success" className="text-center" text={"black"}>
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text className="secondryText">{Latest.recovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Latest Update: {lastUpdate}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <Form>
        <Form.Group controlId="formGroupSearch">
          <Form.Control
            type="text"
            placeholder="Search a Country"
            onChange={(e) => setSearchCountries(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Columns queries={queries}>{countries}</Columns>
    </div>
  );
}
export default App;
