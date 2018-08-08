import React, {Component} from 'react'
import pacman from '../../images/Pacman.svg';
import jianyang from '../../images/jianyang.png'
import Typist from 'react-typist';
import './View1.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLevelDownAlt, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faLevelDownAlt)
library.add(faLevelUpAlt)

class View1 extends Component {
    render() {
        return (
            <div id="View1">
                <div className="View1">
                    <div className="View1-header">
                        <img src={pacman} className="View1-pacman" alt="pacman"/>
                    </div>
                    <div>
                        <Typist className="View1-title">
                            <span>I love you</span>
                            <Typist.Backspace count={10} delay={3000}/>
                            <span>Intro</span>
                        </Typist>
                    </div>
                    <div>
                        <img src={jianyang} className="jianyang"/>
                    </div>
                    <div className='space'>
                    </div>
                    <div className="view1-down-arrow">
                        <AnchorLink href='#View2'>
                            <FontAwesomeIcon icon='level-down-alt' size='5x'/>
                        </AnchorLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default View1;
