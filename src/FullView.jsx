import React, {Component} from 'react';
import View1 from './View1.jsx';
import View2 from './View2.jsx';

class FullView extends Component {
    render() {
        return (
            <div>
                <View1 />
                <View2 />
            </div>
        );
    }
}

export default FullView;
