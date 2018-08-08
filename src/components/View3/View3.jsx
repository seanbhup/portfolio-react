import React, {Component} from 'react'
import pacman from '../../images/Pacman.svg';
import jianyang from '../../images/jianyang.png'
import Typist from 'react-typist';
import './View3.css';

class View3 extends Component {
    render() {
        return (
            <div id="View3">
                <div className="View3">
                    <header className="View3-header">
                        <img src={pacman} className="View3-pacman" alt="pacman"/>
                    </header>
                    <Typist className="View3-title">
                        <span>I love you</span>
                        <Typist.Backspace count={10} delay={3000}/>
                        <span>Portfolio</span>
                    </Typist>
                    <img src={jianyang} className="jianyang"/>


                </div>
            </div>
        );
    }
}

export default View3;
