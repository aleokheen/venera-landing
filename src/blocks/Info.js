import React, { Component } from 'react';

import "../styles/blocks/info.sass";

export default class Header extends Component {

  render() {
    return (
      <div className="block" id="block-info">
        <div className="container">

          <h2>Информация</h2>

          <div className="info-table">

            <div className="row">
              <div className="field">Основатель:</div>
              <div className="value">
                <a href="https://aleokheen.com">
                  Александр Алёхин
                </a>
              </div>
            </div>
            
            <div className="row">
              <div className="field">Пожертвовано:</div>
              <div className="value">
                17 460₽
              </div>
            </div>

            <div className="row">
              <div className="field">Планируемая дата запуска:</div>
              <div className="value">
                IV квартал 2020г.
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
