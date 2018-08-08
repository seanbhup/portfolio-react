import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class SmoothScroll extends Component {
    render() {
        return (
            <div>
                <AnchorLink href='#shit'>Shit</AnchorLink>
                <AnchorLink href='#stuff'>Stuff</AnchorLink>

                <div id='shit'>
                    <h2>Shit</h2>
                </div>
                <section id='stuff'>
                    <h2>Stuff</h2>
                </section>
            </div>
        );
    }
}

export default SmoothScroll;
