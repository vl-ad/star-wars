import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withRouter } from 'react-router-dom';

import CardStar from '@src/Card/Star';
import { historyShape } from '@shapes/router';
import { PEOPLE_TYPE, STARSHIPS_TYPE, PLANETS_TYPE } from '@constants/types';
import Ship from './Ship';
import Person from './Person';
import Planet from './Planet';
import Close from './Close';

import css from './index.css';

class Card extends PureComponent {
  get CardComponent() {
    // choose the Card component type
    return {
      [STARSHIPS_TYPE]: Ship,
      [PLANETS_TYPE]: Planet,
      [PEOPLE_TYPE]: Person,
    }[this.type];
  }

  get type() {
    const { card: { url } } = this.props;

    if (url.includes(PLANETS_TYPE)) return PLANETS_TYPE;
    if (url.includes(STARSHIPS_TYPE)) return STARSHIPS_TYPE;

    return PEOPLE_TYPE;
  }

  goTo = () => {
    const { history, card: { uid }, isFull } = this.props;

    if (isFull) return;

    // go to page to open the SingleItemView
    history.push(`/list/${this.type}/${uid}`);
  };

  render() {
    const { card, isFull } = this.props;
    const { CardComponent } = this;

    return (
      <div
        onClick={this.goTo}
        className={cn(css.container, { [css.full]: isFull })}
      >
        <div className={css.buttons}>
          <CardStar card={card} />
          {isFull && <Close type={this.type} />}
        </div>
        <CardComponent
          isFull={isFull}
          card={card}
        />
      </div>
    );
  }
}

Card.defaultProps = {
  isFull: false,
};

Card.propTypes = {
  isFull: PropTypes.bool,
  card: PropTypes.shape({
    uid: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  history: historyShape.isRequired,
};

export default withRouter(Card);
