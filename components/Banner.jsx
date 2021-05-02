import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label.jsx';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="relative flex flex-wrap items-center justify-center px-2 py-3 bg-pink-500 mb-3">
                    <Label text={"strike"} value={this.props.strike} />
                    <Label text={"challenge"} value={this.props.challenge} />
            </div>
        );
    }
}
