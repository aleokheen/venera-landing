import React, { Component } from 'react';

import "../styles/blocks/about.sass";

export default class Header extends Component {

  render() {
    return (
      <div className="block" id="block-about">
        <div className="container">

          <h2>О проекте</h2>

          <p className="description">
            Venera Chat - онлайн-проект для анонимного общения и поиска новых знакомств, указав минимум информации о себе и желаемом собеседнике
          </p>

          <p className="description">
            Главная философия проекта Venera - построить максимально качественный и релевантный продукт, грамотно используя последние технологии веб-разработки. Благодаря широкому функционалу и удобству использования, мы хотим стать единственным продуктом в этой сфере.
          </p>

          <p className="description small">
            Проект находится на состоянии задумки. Приблизительная дата запуска: <b>IV квартал 2020 года</b>
          </p>

        </div>
      </div>
    )
  }
}
