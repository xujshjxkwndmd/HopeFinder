import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/banner';
import Link from 'next/link'

export default class Label extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Banner strike={3} challenge={5}/>
                <p>
                    <Link href="/calendar/202105">
                        <a>Calendar</a>
                    </Link>
                </p>
                <p>
                <Link href="/collection/friend">
                    <a>Collection</a>
                </Link>
                </p>
            </div>
        );
    }
}