import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './coment.module.css';
import { Container, Row, Col, Nav, Button, Navbar, Form, FormControl} from 'react-bootstrap';
import Dialogs from './dialogs/dialogs';
import Message from "./messages/messages";
import {Massageform} from "./messages/massage_form";



const Coment = (props) => {

    let state = props.DialogsData;
    let SendMessage = (massage) =>{
        props.SendMessage(massage);
    }
    let newPostElemet = React.createRef();
    let DialogsElement = state.Dialogs.map( d => <Dialogs id={d.id} name={d.name} /> );
    let messagesElements = state.Messages.map( m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;

return (
    <Container>
        <Row>
        <Col>{DialogsElement}</Col>
        <Col>
            <div>
                {messagesElements}
            </div>
        <div>
            <Massageform SendMessage={SendMessage} />
        </div>
        </Col>
        </Row>
    </Container>
    );
}

export default Coment;