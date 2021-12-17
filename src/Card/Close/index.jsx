import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { historyShape } from '@shapes/router';

import css from './index.css';

class CardClose extends PureComponent {
  goTo = (e) => {
    e.stopPropagation();

    const { type, history } = this.props;

    // go to main page according to the Card type
    history.push(`/list/${type}`);
  };

  render() {
    return (
      <div
        onClick={this.goTo}
        className={css.close}
      />
    );
  }
}

CardClose.defaultProps = {};

CardClose.propTypes = {
  history: historyShape.isRequired,
  type: PropTypes.string.isRequired,
};

export default withRouter(CardClose);
