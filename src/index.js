import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import testPage from './page/testPage';

export const history = createHistory()
export const store = configureStore(history);
const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <ConnectedRouter history={history}>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" copmonent={testPage}/>
        </Provider>
      </Switch>
    </ConnectedRouter>
  </AppContainer>,
  rootEl,
)

if(module.hot) {
  module.hot.accept('./components/Test', () => {
    render(Test)
  })
}
