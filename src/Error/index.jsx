import React, { PureComponent } from 'react';

import css from './index.css';

class Error extends PureComponent {
  render() {
    return (
      <div className={css.content}>
        There are no items to display. ¯\_(ツ)_/¯
        <br />
        Please refresh the page and try again.
      </div>
    );
  }
}

export default Error;
