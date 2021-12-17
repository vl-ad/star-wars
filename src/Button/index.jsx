import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Loader from '@src/Loader';

import css from './index.css';

class Button extends PureComponent {
  render() {
    const { text, onClick, isFetching } = this.props;

    return (
      <div
        className={cn(css.button, {
          [css.disabled]: isFetching,
        })}
        onClick={isFetching ? undefined : onClick}
      >
        {text}
        {isFetching && <Loader isSmall />}
      </div>
    );
  }
}

Button.defaultProps = {
  isFetching: false,
};

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
};

export default Button;
