import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Card from '@src/Card';

import css from './index.css';

class CardsList extends PureComponent {
  render() {
    const { list } = this.props;

    return (
      <div className={css.list}>
        {list.map((card) => <Card card={card} key={card.name} />)}
      </div>
    );
  }
}

CardsList.defaultProps = {
  list: [],
};

CardsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
};

export default CardsList;
