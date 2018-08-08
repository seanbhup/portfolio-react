import React, {Component} from 'react';
import {ButtonToolbar, Button, Modal} from 'react-bootstrap';



class ResumeModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleShow() {
        this.setState({show: true});
    }

    handleHide() {
        this.setState({show: false});
    }

    render() {
        return (<ButtonToolbar>
            <div onClick={this.handleShow}>
                Misplaced Modal
            </div>
            <Modal {...this.props} show={this.state.show} onHide={this.handleHide} dialogClassName="custom-modal">
                <Modal.Header closeButton="closeButton">
                    <Modal.Title id="contained-modal-title-lg">

                        Maybe current video game playing for fun
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    Modal Body
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleHide}>Close</Button>

                </Modal.Footer>
            </Modal>
        </ButtonToolbar>);
    }
}

export default ResumeModal;
