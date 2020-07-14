import React, { Component } from 'react';

import imIcons from '../im-icons.svg';

export default class Header extends Component {

  render() {
    return (
      <svg viewBox="0 0 24 24">
        <use xlinkHref={imIcons + `#${this.props.icon}`} />
      </svg>
    )
  }
}
