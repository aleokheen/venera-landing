import React, { Component } from 'react';

import "../styles/blocks/welcome.sass";

import DialogImageRu from '../images/blocks/welcome/dialog_ru.svg'

export default class Header extends Component {

  render() {
    return (
      <div className="block" id="block-welcome">
        <div className="container">
          
          <div className="__left">
            <h1>Venera Chat</h1>
            <h2>
              <u>Анонимно</u> ищите людей для общения и знакомств через один из самых современных и развитых сервисов - <b>Venera Chat</b>
            </h2>
            <div className="disclaimer">
              (Проект в состоянии задумки)
            </div>
          </div>

          <div className="__right">

            <img src={DialogImageRu} alt="Venera chat dialog"/>
          </div>
        </div>
      </div>
    )
  }
}
