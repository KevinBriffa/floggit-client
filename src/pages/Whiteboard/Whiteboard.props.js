import PropTypes from 'prop-types';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.Object,
  }).isRequired,
};

export default propTypes;
