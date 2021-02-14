import React from 'react';

import{Navbar, Nav, Form, Button, FormControl, Row, Col} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="boot">
      <header className="App-header">
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
    <Form>
  <Row>
    <Col>
    <Form.Label>First name</Form.Label>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
    <Form.Label>Last name</Form.Label>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
</Form>
<Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
<Button variant="primary" type="submit">
    Submit
  </Button>
      </header>
    </div>
  );
}

export default App;
