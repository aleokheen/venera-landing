import React, { Component } from 'react';

import "../styles/blocks/features.sass";

import ImIcon from '../components/im-icon'

export default class Header extends Component {

  render() {
    return (
      <div className="block" id="block-features">
        <div className="container">

          <h2>Особенности проекта</h2>

          <div className="features">

            <div className="item">
              <div className="icon">
                <ImIcon icon="glasses-12"/>
              </div>
              <div className="title">
                +∞ к анонимности
              </div>
              <div className="description">
                Открытый исходный код, правильная архитектура и нерушимые принципы дают по-настоящему анонимная информация. Никакая информация никуда не сохраняется (даже сообщения, фотографии и т.д.)
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <ImIcon icon="shield-1-thin" />
              </div>
              <div className="title">
                Всё надёжно защищено
              </div>
              <div className="description">
                Мы используем P2P, чтобы обеспечить бессерверное общение. Вся переписка происходит между устройствами напрямую и её не возможно перехватить/дешифровать/отследить.
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <ImIcon icon="code-thin" />
              </div>
              <div className="title">
                Open Source, Open API
              </div>
              <div className="description">
                Исходный код проекта есть в свободном доступе, что позволит любому человеку в деталях изучить, как это всё работает. Вы также можете создавать свои приложения на основе нашего открытого API
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <ImIcon icon="phone-13" />
              </div>
              <div className="title">
                Хочешь немного выговориться?
              </div>
              <div className="description">
                Да, мы ещё и звонки впихнули. При желании можно позвонить собеседнику по аудио или видео. Также можно менять тон своего голоса во избежание деанона
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <ImIcon icon="marketing-35" />
              </div>
              <div className="title">
                Выразите себя на максимум
              </div>
              <div className="description">
                На нашей платформе вы можете отправлять фотографии, голосовые сообщения, видео, документы, стикеры... Для этого не нужно регистрироваться, а отсылать всё можно в неограниченном объёме
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <ImIcon icon="toggle-thin" />
              </div>
              <div className="title">
                Фанкшаналити++
              </div>
              <div className="description">
                Заготавливайте шаблоны сообщений, сыграйте в миниигру пока идёт поиск собеседника, участвуйте в опросах. И только с этого мы начинаем строить базовый функционал платформы
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <ImIcon icon="networking-6" />
              </div>
              <div className="title">
                Нас не получится заблокировать
              </div>
              <div className="description">
                Мы задёствовали две крупнейшие в мире сети Amazon AWS и Cloudflare, которые помогают нашему проекту быть всегда доступным в любой точке мира не смотря на попытки его заблокировать
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <ImIcon icon="heart-thin" />
              </div>
              <div className="title">
                #свобода #качество #человечность
              </div>
              <div className="description">
                Мы беспрерывно вкладываем максимум времени, сил, денег, навыков и нервов в этот проект и сделали это своей философией. Мы хотим добиться уважения и любви наших пользователей
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <ImIcon icon="smiley-thin" />
              </div>
              <div className="title">
                Никакой коммерции
              </div>
              <div className="description">
                Мы не ставим прибыль - как цель, ради которой создаётся проект. Нам просто приятно заниматься своим любимым делом, поэтому всю энергию и любовь мы вкладываем в Venera Chat.
              </div>
            </div>
            
          </div>

        </div>
      </div>
    )
  }
}
