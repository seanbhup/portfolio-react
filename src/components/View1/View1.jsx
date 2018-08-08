import React, {Component} from 'react'
import pacman from '../../images/Pacman.svg';
import jianyang from '../../images/jianyang.png'
import Typist from 'react-typist';
import './View1.css';

class View1 extends Component {
    render() {
        return (
            <div id="View1">
                <div className="View1">
                    <header className="View1-header">
                        <img src={pacman} className="View1-pacman" alt="pacman"/>
                    </header>
                    <Typist className="View1-title">
                        <span>I love you</span>
                        <Typist.Backspace count={10} delay={3000}/>
                        <span>Intro</span>
                    </Typist>
                    <img src={jianyang} className="jianyang"/>


                </div>
            </div>
        );
    }
}

export default View1;
