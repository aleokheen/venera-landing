import React, { Component } from 'react';

import "../styles/blocks/technologies.sass";

import ReactLogo from '../images/blocks/technologies/react_logo.svg'
import WebRTCLogo from '../images/blocks/technologies/webrtc_logo.svg'
import NodeJSLogo from '../images/blocks/technologies/nodejs_logo.svg'
import RedisLogo from '../images/blocks/technologies/redis_logo.svg'
import SocketIOLogo from '../images/blocks/technologies/socketio_logo.svg'

export default class Header extends Component {

  render() {
    return (
      <div className="block" id="block-technologies">
        <div className="container">

          <h2>Технологии проекта</h2>

          <p className="description">
            Проект Venera строится на идеально подходящих и лучших технологиях:
          </p>

          <div className="technologies-grid">

            <div className="item">
              <div className="icon">
                <img src={ReactLogo} alt="React" />
              </div>
              <div className="title">
                <a href="https://reactjs.org">React</a>
              </div>
              <div className="description">
                <b>React.js</b> - фреймворк для написания клиентской части веб-приложения
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <img src={WebRTCLogo} alt="WebRTC" />
              </div>
              <div className="title">
                <a href="https://webrtc.org">WebRTC</a>
              </div>
              <div className="description">
                <b>WebRTC</b> - технология для реализации P2P-соединений между клиентами
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <img src={NodeJSLogo} alt="Node.js" />
              </div>
              <div className="title">
                <a href="https://nodejs.org">Node.JS</a>
              </div>
              <div className="description">
                <b>Node.JS</b> - JavaScript-движок для написания серверной части веб-приложений
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <img src={RedisLogo} alt="Redis" />
              </div>
              <div className="title">
                <a href="https://redis.io">Redis</a>
              </div>
              <div className="description">
                <b>Redis</b> используем для временного хранения информации о сокетах
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <img src={SocketIOLogo} alt="Socket.IO" />
              </div>
              <div className="title">
                <a href="https://socket.io">Socket.IO</a>
              </div>
              <div className="description">
                <b>Socket.IO</b> управляет поиском собеседника и инициирует P2P-соединения
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}
