import React, {Component} from 'react'
import pacman from '../../images/Pacman.svg';
import jianyang from '../../images/jianyang.png';
import face from '../../images/face.png';
import Typist from 'react-typist';
import SnowStorm from 'react-snowstorm';
import './View1.css';
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
    FaAngleDown
} from 'react-icons/fa';
library.add(faFilePdf, faLevelDownAlt, faLevelUpAlt, faFile, faAngleDown, faStroopwafel);

class View1 extends Component {
    render() {
        return (
            <div id="View1">
                <div className='view1'>
                    <div className="view1-header">

                    </div>
                    <div className='view1-body'>
                        <div>
                            <div>
                                <img className='face' src={face}></img>
                                <div className='media-icons'>
                                    <IconContext.Provider value={{
                                            color: "#0EB1D2",
                                            size: '4em',
                                            className: "media-icon"
                                        }}>
                                        <div>
                                            <a href='https://github.com/seanbhup' target="_blank">
                                                <FaGithub/>
                                            </a>
                                            <a href='https://www.linkedin.com/in/seanbhupathi/' target="_blank">
                                                <FaLinkedin/>
                                            </a>
                                            <a href='https://stackoverflow.com/story/seanbhup' target="_blank">
                                                <FaStackOverflow/>
                                            </a>
                                            <a href='https://www.instagram.com/seanbhupathi/' target="_blank">
                                                <FaInstagram/>
                                            </a>
                                            <a href='https://www.twitch.tv/loqnessmonster/' target="_blank">
                                                <FaTwitch/>
                                            </a>

                                        </div>
                                    </IconContext.Provider>
                                    {/* <FontAwesomeIcon icon='file' size='5x' id='media-icon'/> */}
                                </div>
                            </div>
                            <Typist avgTypingDelay={80} cursor={{
                                    show: false
                                }} className="view1-title">
                                <Typist.Delay ms={500}/>
                                <span>Hello, I am <span className='groot'>Groot!</span></span>
                                <Typist.Backspace count={9} delay={1500}/>
                                <span>&#39;m<span className='title-name'> Sean Bhupathi!</span></span>
                                <Typist.Delay ms={3000}/>
                            </Typist>
                            <Typist avgTypingDelay={50} cursor={{
                                    show: false
                                }} className="view1-title">
                                <Typist.Delay ms={6800}/>
                                <span>Full Stack Developer</span>
                            </Typist>
                            <Typist avgTypingDelay={70} cursor={{
                                    show: false
                                }} className='view1-title'>
                                <Typist.Delay ms={8500}/>
                                <span>as well as...</span><Typist.Delay ms={1000}/><span> Human</span>
                            </Typist>

                        </div>
                    </div>
                    <div className="view1-down-arrow">
                        <AnchorLink href='#View2'>
                            <IconContext.Provider value={{
                                    color: "#0EB1D2",
                                    size: '5em',
                                    className: "media-icon"
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

export default View1;
