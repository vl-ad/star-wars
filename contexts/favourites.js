import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FavouritesContext = React.createContext([]);
const { Provider } = FavouritesContext;

class FavouritesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // get already favourite items from localStorage
      favourites: JSON.parse(localStorage.getItem('favourites') || '[]'),
    };
  }

  toggleFavourites = (card) => {
    let { favourites } = this.state;

    // if the item is already in the localStorage - remove it
    if (favourites.find(({ name }) => name === card.name)) {
      favourites = favourites.filter(({ name }) => name !== card.name);
    } else {
      // if no - add it to the localStorage
      favourites = [...favourites, card];
    }

    this.setState({ favourites });

    // set the new list of items to localStorage
    localStorage.setItem('favourites', JSON.stringify(favourites));
  };

  render() {
    const { children } = this.props;
    const { favourites } = this.state;
    const { toggleFavourites } = this;

    return (
      <Provider value={{ favourites, toggleFavourites }}>
        {children}
      </Provider>
    );
  }
}

FavouritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FavouritesProvider };

export default FavouritesContext;
