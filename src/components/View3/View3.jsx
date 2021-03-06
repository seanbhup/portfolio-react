import React, {Component} from 'react'
import './View3.css';
import geogame from '../../images/geogame.png';
import alienslaughter from '../../images/alienslaughter.png';
import atlantavibes from '../../images/atlantavibes.png';
import udemypvzclone from '../../images/udemypvzclone.png';
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
    FaSortUp,
    FaSortDown,
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
                                    <img className='project-image' src={alienslaughter} />
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className='project-text project-description'>
                                    <IconContext.Provider value={{
                                            color: "#E7E6F7",
                                            size: '1em',
                                            className: "arrow"
                                        }}>
                                        <div>

                                            <br></br>
                                            AtlantaVibes
                                            <br></br>
                                            <span className='small-text'>
                                                Festival social media app -
                                                React/Redux, Express, MySQL, Node
                                            </span>
                                            <br></br>
                                            <span className='more-info-and-demo'>
                                                <a href='https://github.com/seanbhup/AtlantaVibes'>Github </a>
                                                <span>|</span>
                                                <a href='https://www.youtube.com/watch?v=u4IcZspgeHc&feature=youtu.be'>&nbsp;Demo</a>
                                            </span>
                                            <br></br>
                                            <FaSortDown/>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className='project project1'>
                                    <img className='project-image' src={udemypvzclone} />
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className='project-text project-description'>
                                    <IconContext.Provider value={{
                                            color: "#E7E6F7",
                                            size: '1em',
                                            className: "arrow"
                                        }}>
                                        <div>

                                            <br></br>
                                            Geography Game
                                            <br></br>
                                            <span className='small-text'>
                                                Quiz yourself on your United States
                                                geography - React, GoogleMapsAPI
                                                <br></br>
                                            </span>

                                            <span className='more-info-and-demo'>
                                                <a href='https://github.com/optipwr/Geography-Game'>Github</a>

                                            </span>
                                            <br></br>
                                            <FaSortDown/>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col xs={3} >
                                <div className='project-text project1'>
                                    <IconContext.Provider value={{
                                            color: "#E7E6F7",
                                            size: '1em',
                                            className: "arrow"
                                        }}>
                                        <div>
                                            <FaSortUp/>
                                            <br></br>
                                            Alien Slaughter: The Game
                                            <br></br>
                                            <span className='small-text'>
                                                Space shooter game -
                                                Unity and C#
                                            </span>
                                            <br></br>
                                            <span>
                                                <span className='more-info-and-demo'>
                                                    <a href='https://github.com/seanbhup/Alien-Slaughter'>Github </a>
                                                    <span>|</span>
                                                    <a href='https://www.youtube.com/watch?v=u4IcZspgeHc&feature=youtu.be'>&nbsp;Demo</a>
                                                </span>

                                            </span>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </Col>
                            <Col xs={3} >
                                <div className='project project1'>
                                    <img className='project-image' src={atlantavibes}  />
                                </div>
                            </Col>

                            <Col xs={3} >
                                <div className='project project1'>
                                    <IconContext.Provider value={{
                                            color: "#E7E6F7",
                                            size: '1em',
                                            className: "arrow"
                                        }}>
                                        <div>
                                            <FaSortUp/>
                                            <br></br>
                                            Glitch Garden
                                            <br></br>
                                            <span className='small-text'>
                                                Plants vs. Zombies clone -
                                                Unity and C#
                                            </span>
                                            <br></br>
                                            <span>
                                                <span className='more-info-and-demo'>
                                                    <a href='https://github.com/seanbhup/Alien-Slaughter'>Github</a>

                                                </span>

                                            </span>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </Col>
                            <Col xs={3} >
                                <div className='project project1'>
                                    <img className='project-image' src={geogame}  />
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
