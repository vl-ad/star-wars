import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { PEOPLE_TYPE, PLANETS_TYPE, STARSHIPS_TYPE } from '@constants/types';

import css from './index.css';

class Header extends PureComponent {
  render() {
    return (
      <header className={css.header}>
        <NavLink
          activeClassName={css.active}
          className={css.link}
          to={`/list/${PEOPLE_TYPE}`}
        >
          People
        </NavLink>
        <NavLink
          activeClassName={css.active}
          className={css.link}
          to={`/list/${PLANETS_TYPE}`}
        >
          Planets
        </NavLink>
        <NavLink
          activeClassName={css.active}
          className={css.link}
          to={`/list/${STARSHIPS_TYPE}`}
        >
          Starships
        </NavLink>
        <NavLink
          activeClassName={css.active}
          className={css.link}
          to="/favourites"
        >
          Favourites
        </NavLink>
      </header>
    );
  }
}

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
