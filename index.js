import React from 'react';
import ReactDOM from 'react-dom';

import App from '@src/App';
import { FavouritesProvider } from '@contexts/favourites';

ReactDOM.render(
  <FavouritesProvider>
    <App />
  </FavouritesProvider>,
  document.getElementById('root'),
);
