import React, { PureComponent } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Header from './Header';

import css from './index.css';

class App extends PureComponent {
  render() {
    return (
      <div className={css.root}>
        <Router>
          <Header />
          <div className={css.content}>
            <Routes />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
