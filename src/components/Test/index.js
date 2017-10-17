import React, { PureComponent } from 'react';
import '../../scss/main.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as mainActions from '../../redux/ducks/main';

class Test extends PureComponent {
  handlerTestActions = () => this.props.mainActions.checkTest();

  render() {
    return(
      <div className='wrapper'>
        <h1 className="title">This is awesom boilerplate</h1>
        <p className="description" onClick={(e) => this.handlerTestActions()}>version with Webpack3 + React + Redux</p>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    main: state.auth,
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    mainActions: bindActionCreators(mainActions, dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));