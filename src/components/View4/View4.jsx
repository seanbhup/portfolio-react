import React, {Component} from 'react'
import pacman from '../../images/Pacman.svg';
import jianyang from '../../images/jianyang.png'
import Typist from 'react-typist';
import './View4.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'

class View4 extends Component {
    render() {
        return (
            <div id="View4">
                <div className="View4">
                    <header className="View4-header"><div className="up-arrow">
                        <AnchorLink href='#View3'>
                            <FontAwesomeIcon icon='level-up-alt' size='5x'/>
                        </AnchorLink>
                    </div>

                    </header>
                    <div>
                        <Typist className="View2-title">
                            <span>I love you</span>
                            <Typist.Backspace count={10} delay={3000}/>
                            <span>Contact</span>
                        </Typist>
                    </div>
                    <div>
                        <img src={jianyang} className="jianyang"/>
                    </div>
                    <img src={pacman} className="View4-pacman" alt="pacman"/>

                </div>
            </div>
        );
    }
}

export default View4;
