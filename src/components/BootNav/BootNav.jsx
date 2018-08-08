import React, {Component} from 'react';
import './BootNav.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Modal from '../Modal/Modal.jsx';
import Resume from '../../images/SeanBhupathiResume.pdf';

class BootNav extends Component {
    render() {
        return (
            <div>
                <Navbar fixedTop='true' fluid='true' inverse="inverse" collapseOnSelect="true">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href=''>PROB NOTHING</a>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <a href={Resume} download>Resume Download</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                PROB NOTHING
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <Modal />
                            </NavItem>

                        </Nav>
                        <Nav pullRight="pullRight">
                            <NavItem eventKey={1} href="#">
                                <AnchorLink href='#View1'>Top</AnchorLink>
                            </NavItem>
                            <NavItem eventKey={1} href="#">
                                <AnchorLink href='#View2'>About</AnchorLink>
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <AnchorLink href='#View3'>Portfolio</AnchorLink>
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <AnchorLink href='#View4'>Contact</AnchorLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>);
    }
}

export default BootNav;
