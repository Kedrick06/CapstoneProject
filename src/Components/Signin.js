import axios from 'axios';
import React, { Component } from 'react';
import {Form, Col, Button, Container} from 'react-bootstrap';

const signinApi = 'https://glacial-wave-82551.herokuapp.com/user-management/v1/users/'


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
        };
        this.handleUserInput = this.handleUserInput.bind(this);

    }
    handleUserInput(e) {
        let {name, value} = e.target
        this.setState({[name] :value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log('My post')

        let newUsers = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email:this.state.email,
        }

    this.postUserData(newUsers)
    }
    
    postUserData=(newUsers)=>
    axios
    .post(signinApi, newUsers)
    .then(res=>{
        const data = res.data
        console.log(data);
    })

    getData(){
        axios.get(signinApi)
        .then(res => {
            const data = res.data
            console.log(data);
            const user = data.map((u, index) => {
            console.log(user);
            }
            )
        })
    }

    render() {
    







        return (
            <div className="App-header">
                <br></br>
               <h1 className="sign-in">Please Sign In</h1>
               <br></br>
<Container lg="auto">
               <Form onSubmit={this.handleSubmit}>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        First Name
      </Form.Label>
      <Form.Control onChange= {this.handleUserInput}
        className="mb-2"
        name="firstName"
        id="inlineFormInput"
        value={this.state.firstName} 
        placeholder="Enter Your First Name"/>
    </Col>

    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Last Name
      </Form.Label>
      <Form.Control onChange={this.handleUserInput}
        className="mb-2"
        name="lastName"
        id="inlineFormInput"
        value={this.state.lastName} 
        placeholder="Enter Your Last Name"/>
        
    </Col>

    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Email
      </Form.Label>
        <Form.Control onChange={this.handleUserInput}
        id="inlineFormInputGroup" 
        value={this.state.email} 
        name="email"
        placeholder="Enter Your Email">

        </Form.Control>
    </Col>

    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Remember me"
      />
    </Col>
    <Col xs="auto">
      <Button onSubmit={this.handleSubmit} type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Form.Row>
</Form>
</Container>

            </div>
        );
    }

}

export default Signin;