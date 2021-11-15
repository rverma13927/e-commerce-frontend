import React, { Component } from "react";
import properties from "../../envVariables/local";
import axios from "axios";
import Autentication from '../../service/authentication'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Login3 extends Component {
        constructor(props){
            super(props);
            this.state ={ 
                 username : '',
                 password: '',  
            }
        }
    
handleSubmit = event => {
    event.preventDefault();
    
    Autentication.login(this.state.username,this.state.password).then(res=>{
        window.location = "/product";
    });
   
    
  }
handleChangeUsername = event =>{
    this.setState({ username: event.target.value});
  }

  handleChangePassword = event =>{
    this.setState({ password: event.target.value});
  }

 render() {
        return (
            <Container fluid>
                <Row > 
                <Col xs={1} md={3}></Col>
                    <Col xs={6} >
            <form onSubmit = { this.handleSubmit }>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" placeholder="Enter email"  onChange= {this.handleChangeUsername} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange= {this.handleChangePassword} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            <Col xs={1} md={3}></Col>
            </Col>
            </Row>
            </Container>
        );
    }
}