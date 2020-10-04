import React from "react";

import {Link} from 'react-router-dom';
import GoogleLogin from 'react-google-login';

// reactstrap components
import {
  Card,
  CardHeader,
  Row,
  Col
} from "reactstrap";

import {useUserDispatch, loginUser } from '../../context/UserContext';
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

function Login(props) {
 
   var userDispatch = useUserDispatch();

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <GoogleLogin
                  clientId={GOOGLE_CLIENT_ID}
                  buttonText="Sign In with Google"
                  onSuccess={(response) => {
                    loginUser(userDispatch, props.history, response);
                  }}
                  onFailure={console.log}
                />
              </div>
            </CardHeader>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <Link to='/auth/register' className="text-light">
               <small>Create new account</small> 
              </Link>
            </Col>
          </Row>
        </Col>
      </>
    );
}


export default Login;
