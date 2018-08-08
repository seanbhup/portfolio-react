import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Nav.css';


class Nav extends Component {
    render() {
        return (
            <div>
                <div className='nav'>
                    <div className='nav-left'>
                        Resume
                    </div>
                    <div className="nav-right">
                        <AnchorLink href='#View2'>Alien</AnchorLink>
                    </div>

                </div>
            </div>

        );
    }
}

export default Nav;
