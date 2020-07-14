import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
// import * as serviceWorker from './serviceWorker';

import Header from "./blocks/Header";

import WelcomeBlock from "./blocks/Welcome";
import AboutBlock from "./blocks/About";
import FeaturesBlock from "./blocks/Features";
import TechnologiesBlock from "./blocks/Technologies";
import StepsBlock from "./blocks/Steps";
import InfoBlock from "./blocks/Info";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <WelcomeBlock />
    <AboutBlock />
    <FeaturesBlock />
    <TechnologiesBlock />
    <StepsBlock />
    <InfoBlock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
