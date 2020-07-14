import React, { Component } from 'react';

import classNames from "classnames"

import "../styles/components/header.sass";

import ImIcon from '../components/im-icon'
import Nav from '../blocks/Nav'

import Logo from "../images/venera.svg"

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isHeaderCompact: false,
      mobileNavShown: false
    }
  }

  /* === Smooth anchor scrolling === */

  scrollTo(selector, e) {
    e && e.preventDefault()
    selector = selector || e.target.hash

    const yOffset = -150
    const element = document.querySelector(selector)

    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  
  /* === Toggle mobile nav === */

  toggleMobileNav() {
    this.setState((state) => ({
      mobileNavShown: !state.mobileNavShown
    }))
  }

  /* === On mounted === */

  componentDidMount() {
    
    window.addEventListener('scroll', () => {
      
      this.setState({
        isHeaderCompact: window.pageYOffset > 1
      })
    }, false)
  }

  /* === Render === */
  
  render() {
    return (
      <>
        <header className={classNames({_compact: this.state.isHeaderCompact})}>

          <div className="__left" onClick={() => this.scrollTo("html")}>

            <img id="logo" src={Logo} alt="Venera Chat" />
            <h1>Venera Chat</h1>
          </div>

          <div className="__right">

            <Nav />

            <button className="nav-switcher" onClick={this.toggleMobileNav.bind(this)}>
              <ImIcon icon="menu-1" />
            </button>
          </div>
        </header>
        <div className={classNames("mobile-nav", { _shown: this.state.mobileNavShown })} onClick={this.toggleMobileNav.bind(this)}>
          <Nav onClick={this.toggleMobileNav.bind(this)} />
        </div>
      </>
    )
  }
}
