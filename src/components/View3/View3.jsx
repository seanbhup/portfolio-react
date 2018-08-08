import React, {Component} from 'react'
import pacman from '../../images/Pacman.svg';
import jianyang from '../../images/jianyang.png'
import Typist from 'react-typist';
import './View3.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons'

class View3 extends Component {
    render() {
        return (
            <div id="View3">
                <div className="View3">
                    <header className="View3-header">
                        <img src={pacman} className="View3-pacman" alt="pacman"/>
                    </header>
                    <div>
                        <Typist className="View3-title">
                            <span>I love you</span>
                            <Typist.Backspace count={10} delay={3000}/>
                            <span>Portfolio</span>
                        </Typist>
                    </div>
                    <div>
                        <img src={jianyang} className="jianyang"/>
                    </div>

                    <div className="down-arrow">
                        <AnchorLink href='#View4'>
                            <FontAwesomeIcon icon='level-down-alt' size='5x'/>
                        </AnchorLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default View3;
