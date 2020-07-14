import React, { Component } from 'react';

export default class Header extends Component {

  /* === Smooth anchor scrolling === */

  scrollTo(selector, e) {
    e && e.preventDefault()
    selector = selector || e.target.hash

    const yOffset = -150
    const element = document.querySelector(selector)

    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  /* === Render === */

  render() {
    return (
      <nav>
        <a href="#block-about" onClick={(e) => this.scrollTo(null, e)}>
          О проекте
        </a>
        <a href="#block-features" onClick={(e) => this.scrollTo(null, e)}>
          Особенности
        </a>
        <a href="#block-technologies" onClick={(e) => this.scrollTo(null, e)}>
          Технологии
        </a>
        <a href="#block-steps" onClick={(e) => this.scrollTo(null, e)}>
          Этапы создания
        </a>
        <a href="#block-info" onClick={(e) => this.scrollTo(null, e)}>
          Информация
        </a>
      </nav>
    )
  }
}
