import React from "react";

// reactstrap components
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2020{" "}
              <div
                className="font-weight-bold ml-1"
              >
                Meet and Hemang
              </div>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <NavLink
                >
                    OSS DAIICT

                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                >
                  About Us
                </NavLink>
              </NavItem>

            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
