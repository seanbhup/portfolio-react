import React, {Component} from 'react'
import pacman from '../../images/Pacman.svg';
import jianyang from '../../images/jianyang.png'
import Typist from 'react-typist';
import './View2.css';

class View2 extends Component {
    render() {
        return (
            <div>
                <div className="View2">
                    <header className="View2-header">
                        <img src={pacman} className="View2-pacman" alt="pacman"/>
                    </header>
                    <Typist className="View2-title">
                        <span>Jinyang</span>
                        <Typist.Backspace count={7} delay={3000}/>
                        <span>View 2</span>
                    </Typist>
                    <img src={jianyang} className="jianyang"/>
                </div>
            </div>
        );
    }
}

export default View2;
