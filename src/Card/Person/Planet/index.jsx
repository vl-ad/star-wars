import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { PLANETS_TYPE } from '@constants/types';
import Button from '@src/Button';
import { getPlanet } from '@api/planets';

class CardPersonPlanet extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFetchingPlanet: false,
      planet: {},
    };
  }

  fetchPlanet = async () => {
    const { homeworld } = this.props;

    this.setState({ isFetchingPlanet: true });

    try {
      const result = await getPlanet({ url: homeworld });
      const properties = result.result?.properties;
      const uid = result.result?.uid;

      this.setState({
        planet: { ...properties, uid },
        isFetchingPlanet: false,
      });
    } catch {
      this.setState({ isFetchingPlanet: false });
    }
  };

  render() {
    const { isFetchingPlanet, planet } = this.state;
    const { name, uid } = planet;

    // if we already have the planet -render the link
    const planetLint = name
      ? <Link to={`/list/${PLANETS_TYPE}/${uid}`}>{name}</Link>
      : (
        <Button
          text="Get planet name"
          onClick={this.fetchPlanet}
          isFetching={isFetchingPlanet}
        />
      );

    return (
      <li>
        Home world: {planetLint}
      </li>
    );
  }
}

CardPersonPlanet.defaultProps = {
  homeworld: '',
};

CardPersonPlanet.propTypes = {
  homeworld: PropTypes.string,
};

export default CardPersonPlanet;
