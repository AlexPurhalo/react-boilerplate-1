import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import Test from './components/Test'

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <Test />
  </AppContainer>,
  rootEl,
)

if(module.hot) {
  module.hot.accept('./components/Test', () => {
    render(Test)
  })
}
