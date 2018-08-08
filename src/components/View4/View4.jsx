import React, {Component} from 'react'
import pacman from '../../images/Pacman.svg';
import jianyang from '../../images/jianyang.png'
import Typist from 'react-typist';
import './View4.css';

class View4 extends Component {
    render() {
        return (
            <div id="View4">
                <div className="View4">
                    <header className="View4-header">
                        <img src={pacman} className="View4-pacman" alt="pacman"/>
                    </header>
                    <Typist className="View4-title">
                        <span>I love you</span>
                        <Typist.Backspace count={10} delay={3000}/>
                        <span>Contact</span>
                    </Typist>
                    <img src={jianyang} className="jianyang"/>


                </div>
            </div>
        );
    }
}

export default View4;
