import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { PEOPLE_TYPE } from '@constants/types';

import Error from '@src/Error';
import Loader from '@src/Loader';

const List = React.lazy(() => import('../../Pages/List'));
const Favourites = React.lazy(() => import('../../Pages/Favourites'));
const SIV = React.lazy(() => import('../../Pages/SIV'));

class App extends PureComponent {
  render() {
    return (
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/list/:type">
            <List />
          </Route>
          <Route exact path="/list/:type/:activeId?">
            <SIV />
          </Route>
          <Route exact path="/">
            <Redirect to={`/list/${PEOPLE_TYPE}`} />
          </Route>
          <Route exact path="/favourites">
            <Favourites />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </React.Suspense>
    );
  }
}

export default App;
