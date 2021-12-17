import { withRouter } from 'react-router-dom';

import FavouritesContext from '@contexts/favourites';
import { List } from '../List';

class Favourites extends List {
  method = () => Promise.resolve({ results: this.context.favourites });

  componentDidUpdate() {
    const { list } = this.state;
    // get the favourites items from the localStorage context
    const { favourites } = this.context;

    // update the data if the item was deleted
    if (favourites.length !== list.length) this.fetch();
  }
}

// connect to the context
Favourites.contextType = FavouritesContext;

export default withRouter(Favourites);
