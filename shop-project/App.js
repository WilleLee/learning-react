/* eslint-disable */

//image src를 data.js object에 포함시키고 value.link로 불러오도록 변경

import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import productData from './data';

function App() {

  let [products, productsFunction] = useState(productData);

  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Card className="text-center">
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body className="background">
          <Card.Title>20% Season Off</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Learn more</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>


    <Product products={products} />

    </div>
  );
}

function Product(props){
  return (
    <div className="container">
      <div className="row">
        {
          props.products.map( function(value, index){
            return (
              <div className='col-md-4' key={index}>
                <img src={value.link} alt="" width="100%" />
                <h4>{value.title}</h4>
                <p>{value.content}</p>
                <p>{value.price} won</p>
              </div>
            )
          } )
        }
      </div>
    </div>
  )
}

export default App;