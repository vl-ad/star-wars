import React, { PureComponent } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import css from './index.css';

class Loader extends PureComponent {
  render() {
    const { isFull, isSmall } = this.props;

    return (
      <div className={cn(css.container, {
        [css.full]: isFull && !isSmall,
        [css.small]: isSmall,
      })}
      >
        <div className={css.loader} />
      </div>
    );
  }
}

Loader.defaultProps = {
  isFull: true,
  isSmall: false,
};

Loader.propTypes = {
  isFull: PropTypes.bool,
  isSmall: PropTypes.bool,
};

export default Loader;
