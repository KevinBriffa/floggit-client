import { connect } from 'react-redux';
import WhiteboardWrapper from './WhiteboardWrapper';
import { addWhiteboard } from '../../../reduxStore/config/whiteboard';

const mapStateToProps = state => ({
  whiteboards: state.digitalWhiteboards.whiteboards,
});

const mapDispatchToProps = dispatch => ({
  handleCreateWhiteboard: (value) => {
    dispatch(addWhiteboard(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardWrapper);
