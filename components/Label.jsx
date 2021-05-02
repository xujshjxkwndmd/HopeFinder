import React from 'react';
import PropTypes from 'prop-types';

export default class Label extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg-white m-2 p-2">
                {this.props.text} {this.props.value}
            </div>
        );
    }
}
