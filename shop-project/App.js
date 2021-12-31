/* eslint-disable */

//image src를 data.js object에 포함시키고 value.link로 불러오도록 변경

import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import productData from './data';
import Detail from './Detail';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [products, productsFunction] = useState(productData);
/*
  let [ajaxResult, ajaxResultFunction] = useState('');
  let [ajaxClicked, ajaxClickedFunction] = useState(false);
*/

  return (
    <div className="App">
      

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Details" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/detail/0">product0</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/detail/1">product1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/detail/2">product2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action
                </NavDropdown.Item>
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

          <button className='btn btn-primary' onClick={()=>{

            //로딩중이라는 UI 띄움

            // axios.post('서버URL', { id : '', pw : 1234 }).then();

            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{

              //로딩중 UI 안 보이게

              productsFunction([...products, ...result.data]);
            })
            .catch(()=>{ console.log('실패했어요') })

          }}>Load more</button>
{/*
          {
            ajaxClicked === true
            ? <LoadedProduct ajaxResult={ajaxResult} />
            : null
          }
        
          <button className='btn btn-primary' onClick={()=>{

            axios.get('https://codingapple1.github.io/shop/data2.json')// axios.get(데이터 요청할 URL)
            .then((result)=>{
              ajaxResultFunction(result.data);
              ajaxClickedFunction(true);
            }) // 요청 성공했을 때
            .catch(()=>{ console.log('실패했어요') }) // 요청 실패했을 때;
            

          }}>Load more</button>
*/}

          

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
                <img src={`https://codingapple1.github.io/shop/shoes${index+1}.jpg`} alt="" width="100%" />
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

/*
function LoadedProduct(props){
  return (
    <div className="container">
      <div className="row">
        {
          props.ajaxResult.map( function(value, index){
            return (
              <div className='col-md-4' key={index}>
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
*/

export default App;