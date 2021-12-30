/* eslint-disable */

//image src를 data.js object에 포함시키고 value.link로 불러오도록 변경

import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import productData from './data'; // 불러오고자 하는 데이터의 양이 많을 때는 export, import 사용!
//import 변수명 from 경로
import Detail from './Detail';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [products, productsFunction] = useState(productData);
  // Detail.js에 state 저장할 수도 있지만, 중요한 데이터는 항상 App component에 보관하기

  return (
    <div className="App">
      

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <NavDropdown title="Details" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/detail/0">product0</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/detail/1">product1</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/detail/2">product2</Link></NavDropdown.Item>
              </NavDropdown>
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

      <Switch> {/* 중복 허용하지 않음 */}


        <Route exact path="/"> {/*exact -> 해당 path에서만 아래 tags를 보여줌*/}
    

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

        </Route> {/* main route ends */}

        <Route path="/detail/:id"> {/* detail 하위 파라미터 생성 ... value에 따른 페이지 부여 가능 */}
          <Detail products={products} />
        </Route>
        {/*
        <Route path="/어쩌구" component={}></Route>
        특정 컴포넌트만 보여주는 Route 생성 가능
        */}


        <Route path="/:id"> {/* /모든문자에 대해 작동 */}
          <div>dkanrjsk wjrdjTdmf Eo dlrj qhduwntpdy</div>
        </Route>

      </Switch>



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