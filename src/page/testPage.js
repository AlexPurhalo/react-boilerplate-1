import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Test from '../components/Test'

class App extends PureComponent {
  render() {
    return(
      <div id='main'>
        <Test />
      </div>
    );
  }
}

export default withRouter(connect(App));