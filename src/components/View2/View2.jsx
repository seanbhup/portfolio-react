import React, {Component} from 'react'
import './View2.css';
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


class View2 extends Component {
    render() {
        return (
            <div id="View2">
                <div className='view2'>
                    <div className='view2-header'>

                    </div>
                    <Row className='view2-body'>

                            <Col xs={6}>
                                About Me
                            </Col>
                            <Col xs={6}>
                                What I Know
                            </Col>

                    </Row>
                    <div className="view2-down-arrow">
                        <AnchorLink href='#View3'>
                            <IconContext.Provider value={{
                                    color: "#0EB1D2",
                                    size: '5em',
                                    className: "view2-media-icon"
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

export default View2;
