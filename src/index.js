import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/store'

import Test from './components/Test'

export const store = configureStore();  
const rootEl = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <Test />
    </AppContainer>
  </Provider>,
  rootEl,
)

if(module.hot) {
  module.hot.accept('./components/Test', () => {
    render(Test)
  })
}
