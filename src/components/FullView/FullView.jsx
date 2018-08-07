import React, {Component} from 'react';
import Nav from '../Nav/Nav.jsx';
import View1 from '../View1/View1.jsx';
import View2 from '../View2/View2.jsx';
import './FullView.css';

class FullView extends Component {
    render() {
        return (
            <div>
                <Nav />
                <View1 />
                <View2 />
            </div>
        );
    }
}

export default FullView;
