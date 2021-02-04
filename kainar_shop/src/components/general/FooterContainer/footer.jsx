import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './header.module.css';
import { Container, Row, Col, Nav, Button, Navbar, Form, FormControl} from 'react-bootstrap';
import logo from '../../img/logo.jpg'
import {NavLink} from 'react-router-dom';
const Header = (props) => {
    return (
        <div className={classes.mainblock}>
        <Container>
            <Navbar bg="dark" variant="dark" className="ml-12">
                <img src={logo} height="50px" />
                <Nav className="mr-auto ml-5">
                    <Nav.Link>
                        <NavLink to="/main-wrapper" className={classes.navlink}>
                            Home
                            </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/coment" className={classes.navlink}>
                            Coment
                            </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/users" className={classes.navlink}>
                            USERS
                            </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/profile" className={classes.navlink}>
                            Profiles
                        </NavLink>
                    </Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>

                <Col md={{ span: 3, offset: 1 }}>
                    { props.isAuth ? <Row md={{ span: 4, offset: 4 }}> <h4 className ={classes.login}> {props.login}</h4> <Button variant="outline-info" className ={classes.out} onClick={props.logout}>Log out</Button></Row>
                        :<NavLink className ={classes.login}to={"/login"}>LOGIN</NavLink>
                    }
                </Col>
            </Navbar>
        </Container>
        </div>
    );
}
export default Header;