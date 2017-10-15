import React, { PureComponent } from 'react';
import '../../scss/main.scss'

class Test extends PureComponent {
  render() {
    return(
      <div class='wrapper'>
        <h1 className="title">This is awesom boilerplate</h1>
        <p className="description">version with Webpack3 + React</p>
      </div>
    )
  }
}

export default Test;