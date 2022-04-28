import React, { Component } from 'react';
import {Link} from 'react-scroll';
export default class header extends Component {
    render() {
        return (
          <><Link  to="about" spy={true} fast={true}>About</Link></>
        )
    }
}