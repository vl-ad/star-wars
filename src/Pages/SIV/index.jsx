import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import { getPlanet } from '@api/planets';
import { getPerson } from '@api/people';
import { getStarship } from '@api/starships';
import Card from '@src/Card';
import { PEOPLE_TYPE, STARSHIPS_TYPE, PLANETS_TYPE } from '@constants/types';
import { matchShape } from '@shapes/router';
import Loader from '@src/Loader';
import Error from '@src/Error';

class SingleItemView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      card: {},
    };
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { activeId, type } } } = this.props;
    const { match: { params: { activeId: prevId, type: prevType } } } = prevProps;

    // fetch the new data if active id or type were changed
    if (activeId !== prevId || type !== prevType) this.fetch();
  }

  get method() {
    const { match: { params: { type = PEOPLE_TYPE } } } = this.props;

    // choose the method to fetch the item data based on type
    return {
      [STARSHIPS_TYPE]: getStarship,
      [PEOPLE_TYPE]: getPerson,
      [PLANETS_TYPE]: getPlanet,
    }[type];
  }

  fetch = async () => {
    const { method } = this;
    const { match: { params: { activeId } } } = this.props;

    this.setState({ isFetching: true });

    try {
      const response = await method({ id: activeId });
      this.setState({ card: response.result?.properties, isFetching: false });
    } catch {
      this.setState({ isFetching: false });
    }
  };

  render() {
    const { card, isFetching } = this.state;

    if (isFetching) return <Loader />;
    if (!card) return <Error />;

    return <Card isFull card={card} />;
  }
}

SingleItemView.defaultProps = {};

SingleItemView.propTypes = {
  match: matchShape.isRequired,
};

export default withRouter(SingleItemView);
