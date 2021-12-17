import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Planet from './Planet';

import person1 from './img/person_1.png';
import person2 from './img/person_2.png';

import css from '../index.css';

class CardPerson extends PureComponent {
  render() {
    const { card, isFull } = this.props;
    const person = card.name.length % 2 ? person1 : person2;

    return (
      <div className={css.card}>
        <img className={css.img} alt="Person" src={person} />
        <div className={css.list}>
          <ul>
            <li>
              Name: <b>{card.name}</b>
            </li>
            {
              isFull && (
                <>
                  <li>
                    Birth year: <b>{card.birth_year}</b>
                  </li>
                  <li>
                    Height: <b>{card.height}</b>
                  </li>
                  <li>
                    Gender: <b>{card.gender}</b>
                  </li>
                  <li>
                    Mass: <b>{card.mass}</b>
                  </li>
                  {card.homeworld && <Planet homeworld={card.homeworld} />}
                </>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

CardPerson.defaultProps = {
  isFull: false,
};

CardPerson.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    birth_year: PropTypes.string,
    height: PropTypes.string,
    gender: PropTypes.string,
    mass: PropTypes.string,
    // planet url
    homeworld: PropTypes.string,
  }).isRequired,
  isFull: PropTypes.bool,
};

export default CardPerson;
