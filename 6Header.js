import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Text,
  Button,
} from "reactstrap";

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col md="6">
            <Image
              src="https://i.stack.imgur.com/25yL4.png"
              alt="The Movies"
              width="150"
              height="150"
            />
          </Col>
          <Col md="6">
            <h1>The Movies</h1>
            <Button>Пошук</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
