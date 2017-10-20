import PropTypes from 'prop-types';

const propTypes = {
  whiteboards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  onCreateWhiteboard: PropTypes.func,
};

export default propTypes;
