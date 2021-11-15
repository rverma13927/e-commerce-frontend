import './App.css';
import  Customer  from './components/customer/customer';
import PrimarySearchAppBar from './components/navbar/navBar';
import MediaCard from './components/ProductCard/card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/productsPage/Products';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Productcard from './components/ProductCard/Productcard';
import Login from './components/login/login';
function App() {
  return (
    <div className="App">
      <header className="">
        
        <PrimarySearchAppBar/>
          {/* <Container fluid>
            <Row>
               <Col><MediaCard/></Col>
               <Col><MediaCard/></Col>
            </Row>
            </Container> */}
        
        {/* <Customer/>
        <Product/> */}

       <Router>
        <Route exact path="/" component={Product} />  
      <Route exact path="/about" component={Customer} />  
      <Route exact path="/login" component={Login} />  
        </Router>
      </header>
    </div>
  );
}

export default App;
