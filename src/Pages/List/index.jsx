import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import { matchShape } from '@shapes/router';
import Loader from '@src/Loader';
import CardsList from '@src/CardsList';
import Error from '@src/Error';
import { PEOPLE_TYPE, PLANETS_TYPE, STARSHIPS_TYPE } from '@constants/types';
import { getStarships } from '@api/starships';
import { getPeople } from '@api/people';
import { getPlanets } from '@api/planets';

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isFetching: true,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { type: prevType } } } = prevProps;
    if (this.type !== prevType) this.fetch();
  }

  get type() {
    const { match: { params: { type } } } = this.props;
    return type || PEOPLE_TYPE;
  }

  get method() {
    // choose the method to fetch the item data based on type
    return {
      [STARSHIPS_TYPE]: getStarships,
      [PEOPLE_TYPE]: getPeople,
      [PLANETS_TYPE]: getPlanets,
    }[this.type];
  }

  fetch = async () => {
    this.setState({ isFetching: true });

    const { type } = this;

    try {
      const list = await this.method();

      if (type === this.type) {
        this.setState({ list: list.results || [], isFetching: false });
      }
    } catch {
      this.setState({ isFetching: false });
    }
  };

  render() {
    const { list, isFetching } = this.state;

    return (
      <>
        { isFetching && <Loader /> }
        { !isFetching && list.length ? <CardsList list={list} /> : null}
        { !isFetching && !list.length ? <Error /> : null}
      </>
    );
  }
}

List.propTypes = {
  match: matchShape.isRequired,
};

export { List };

export default withRouter(List);
