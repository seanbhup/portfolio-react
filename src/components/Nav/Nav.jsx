import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Nav.css';
import Resume from '../../images/SeanBhupathiResume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {IconContext} from 'react-icons';
import {
    FaFilePdf
} from 'react-icons/fa';
import {
    faLevelDownAlt,
    faLevelUpAlt,
    faFilePdf,
    faFile,
    faAngleDown,
    faStroopwafel,
    faAngleDoubleUp
} from '@fortawesome/free-solid-svg-icons';

library.add(faFilePdf, faLevelDownAlt, faLevelUpAlt, faFile, faAngleDown, faStroopwafel, faAngleDoubleUp);

class Nav extends Component {
    render() {
        return (
            <div>
                <Row className='nav'>
                    <Col xs={6}>
                        <Row className='nav-left'>
                            <Col xs={1}>
                                <div className="nav-left-item resume-icon">
                                    <IconContext.Provider value={{
                                            color: "#0EB1D2",
                                            size: '1.6em',
                                            className: "media-icon"
                                        }}>
                                        <div>
                                            <a href={Resume} target="_blank">
                                                <FaFilePdf/>
                                            </a>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </Col>

                        </Row>

                    </Col>
                    <Col xs={4} xsOffset={2}>
                        <div className='nav-right'>
                            <AnchorLink className='nav-right-item' href='#View2'>About</AnchorLink>
                            <AnchorLink className='nav-right-item' href='#View3'>Projects</AnchorLink>
                            <AnchorLink className='nav-right-item' href='#View4'>Contact</AnchorLink>

                            <AnchorLink className='nav-right-item' href='#View1'>
                                <FontAwesomeIcon icon='angle-double-up' size='1x'/>
                            </AnchorLink>

                        </div>

                    </Col>
                </Row>


            </div>

        );
    }
}

export default Nav;

// <div className='nav'>
//     <div className='nav-left'>
//         Resume
//     </div>
//     <div className="nav-right">
//         <AnchorLink href='#View2'>Alien</AnchorLink>
//     </div>
//
// </div>
