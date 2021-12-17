import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import FavouritesContext from '@contexts/favourites';

import css from './index.css';

class CardStar extends PureComponent {
  toggleActive = (e) => {
    e.stopPropagation();

    const { card } = this.props;
    const { toggleFavourites } = this.context;

    // save the item to localStorage using the context method
    toggleFavourites(card);
  };

  render() {
    const { card } = this.props;
    const { favourites } = this.context;

    return (
      <div
        // for testing purposes
        data-id={card.name}
        onClick={this.toggleActive}
        className={cn(css.star, {
          [css.active]: favourites.find(({ name }) => name === card.name),
        })}
      />
    );
  }
}

// connect to the context
CardStar.contextType = FavouritesContext;

CardStar.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default CardStar;
