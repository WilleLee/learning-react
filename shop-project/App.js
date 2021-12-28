/* eslint-disable */

import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import productData from './data'; // 불러오고자 하는 데이터의 양이 많을 때는 export, import 사용!
//import 변수명 from 경로

function App() {

  let [products, productsFunction] = useState(productData);

  let [productsImg, productsImgFunction] = useState(["https://codingapple1.github.io/shop/shoes1.jpg","https://codingapple1.github.io/shop/shoes2.jpg","https://codingapple1.github.io/shop/shoes3.jpg"]);



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

      {/*bootstrap 문법을 통해 3분할*/}
      {/*
      <div className="container">
        <div className="row">
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            <h4>{products[0].title}</h4>
            <p>{products[0].content}</p>
            <p>{products[0].price}won</p>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
            <h4>shoe2</h4>
            <p>blah blah</p>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h4>shoe3</h4>
            <p>blah blah</p>
          </div>
        </div>
      </div>*/}
      {/*
      <div className="container">
        <div className="row">

      {
        products.map( function(value, index){
          return (
            <div className='col-md-4' key={index}>
              <img src={productsImg[index]} width="100%" />
              <h4>{value.title}</h4>
              <p>{value.content}</p>
              <p>{value.price} won</p>
            </div>
          )
        } )
      }

        </div>
      </div>
    */}

    <Product products={products} productsImg={productsImg} />

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
                <img src={props.productsImg[index]} alt="" width="100%" />
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

/*
shoes.map((a)=>{
  <Card shoes={a} />
})
*/