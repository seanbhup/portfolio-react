import React, {Component} from 'react'
import './View3.css';
import atlantavibes from '../../images/atlantavibes.png';
import {Grid, Row, Col} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faLevelDownAlt,
    faLevelUpAlt,
    faFilePdf,
    faFile,
    faAngleDown,
    faStroopwafel
} from '@fortawesome/free-solid-svg-icons';
import {IconContext} from 'react-icons';
import {
    FaGithub,
    FaLinkedin,
    FaStackOverflow,
    FaTwitch,
    FaInstagram,
    FaSlackHash,
    FaAngleDown,
    FaAngleUp
} from 'react-icons/fa';
library.add(faFilePdf, faLevelDownAlt, faLevelUpAlt, faFile, faAngleDown, faStroopwafel);


class View3 extends Component {
    render() {
        return (
            <div id="View3">
                <div className='view3'>
                    <div className='view3-header'>
                    </div>
                    <div className='view3-body'>
                        <Row className='view3-title'>
                            <Col xs={12}>
                                Projects
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3}>
                                <div className='project project1'>
                                    <img src={atlantavibes} />
                                </div>
                            </Col>

                            <Col xs={3} xsOffset={3}>
                                <div className='project project1'>
                                    <img className='project-image' src={atlantavibes} />
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col xs={3} xsOffset={3}>
                                <div className='project project1'>
                                    <img src={atlantavibes} />
                                </div>
                            </Col>

                            <Col xs={3} xsOffset={3}>
                                <div className='project project1'>
                                    <img src={atlantavibes} />
                                </div>
                            </Col>
                        </Row>





                    </div>
                    <div className="view3-down-arrow">
                        <AnchorLink href='#View4'>
                            <IconContext.Provider value={{
                                    color: "#0EB1D2",
                                    size: '5em',
                                    className: "view3-media-icon"
                                }}>
                                <FaAngleDown />
                            </IconContext.Provider>
                        </AnchorLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default View3;
