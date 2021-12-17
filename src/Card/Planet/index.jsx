import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import planet1 from './img/planet_1.png';
import planet2 from './img/planet_2.png';

import css from '../index.css';

class CardPlanet extends PureComponent {
  render() {
    const { card, isFull } = this.props;
    const planet = card.name.length % 2 ? planet1 : planet2;

    return (
      <div className={css.card}>
        <img className={css.img} alt="Planet" src={planet} />
        <div className={css.list}>
          <ul>
            <li>
              Planet: <b>{card.name}</b>
            </li>
            {
              isFull && (
                <>
                  <li>
                    Rotation period: <b>{card.rotation_period} d.</b>
                  </li>
                  <li>
                    Population: <b>{card.population} p.</b>
                  </li>
                  <li>
                    Terrain: <b>{card.terrain}</b>
                  </li>
                  <li>
                    Diameter: <b>{card.diameter} km</b>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

CardPlanet.defaultProps = {
  isFull: false,
};

CardPlanet.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    population: PropTypes.string,
    terrain: PropTypes.string,
    diameter: PropTypes.string,
  }).isRequired,
  isFull: PropTypes.bool,
};

export default CardPlanet;
