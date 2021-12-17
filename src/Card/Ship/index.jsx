import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ship1 from './img/ship_1.jpeg';
import ship2 from './img/ship_2.jpeg';

import css from '../index.css';

class CardShip extends PureComponent {
  get credits() {
    const { card } = this.props;
    return Number(card.cost_in_credits || 0).toLocaleString();
  }

  render() {
    const { card, isFull } = this.props;
    const ship = card.name.length % 2 ? ship1 : ship2;

    return (
      <div className={css.card}>
        <img className={css.img} alt="Ship" src={ship} />
        <div className={css.list}>
          <ul>
            <li>
              Starship: <b>{card.name}</b>
            </li>
            {
              isFull && (
                <>
                  <li>
                    Model: <b>{card.model}</b>
                  </li>
                  <li>
                    Cost: <b>{this.credits}</b> credits
                  </li>
                  <li>
                    Crew: <b>{card.crew} p.</b>
                  </li>
                  <li>
                    Passengers: <b>{card.passengers} p.</b>
                  </li>
                  <li>
                    Consumables: <b>{card.consumables}</b>
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

CardShip.defaultProps = {
  isFull: false,
};

CardShip.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    model: PropTypes.string,
    cost_in_credits: PropTypes.string,
    crew: PropTypes.string,
    passengers: PropTypes.string,
    consumables: PropTypes.string,
  }).isRequired,
  isFull: PropTypes.bool,
};

export default CardShip;
