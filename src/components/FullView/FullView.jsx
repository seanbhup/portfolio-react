import React, {Component} from 'react';
import BootNav from '../BootNav/BootNav.jsx';
import Nav from '../Nav/Nav.jsx';
import View1 from '../View1/View1.jsx';
import View2 from '../View2/View2.jsx';
import View3 from '../View3/View3.jsx';
import View4 from '../View4/View4.jsx';
import './FullView.css';
// import SmoothScroll from '../SmoothScroll/SmoothScroll.jsx';

class FullView extends Component {
    render() {
        return (
            <div>
                <Nav />
                <View1 />
                <View2 />
                <View3 />
                <View4 />
            </div>
        );
    }
}

export default FullView;
