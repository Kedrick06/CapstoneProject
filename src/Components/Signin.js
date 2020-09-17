import React, { Component } from 'react';
import {Form, Col, Button, Container} from 'react-bootstrap';


class Signin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    render() {







        return (
            <div className="App-header">
                <br></br>
               <h1 className="sign-in">Please Sign In</h1>
               <br></br>
<Container lg="auto">
               <Form>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        First Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Enter Your First Name"/>
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Last Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Enter Your Last Name"/>
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Email
      </Form.Label>
        <Form.Control id="inlineFormInputGroup" placeholder="Enter Your Email">

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
      <Button type="submit" className="mb-2">
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