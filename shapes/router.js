import PropTypes from 'prop-types';

export const matchShape = PropTypes.shape({
  isExact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  params: PropTypes.shape({}),
});

export const historyShape = PropTypes.shape({
  goBack: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
  go: PropTypes.func.isRequired,
  goForward: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
});
