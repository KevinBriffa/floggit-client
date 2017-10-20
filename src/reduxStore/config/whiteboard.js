import whiteboardAPI from '../../utils/repository/whiteboardAPI';

const WHITEBOARD_ADD = 'WHITEBOARD_ADD';
const WHITEBOARD_LOAD = 'WHITEBOARD_LOAD';


const initialState = {
  whiteboards: [],
  displayForm: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WHITEBOARD_ADD: {
      return Object.assign({}, state, { whiteboards: action.data.title });
    }
    case WHITEBOARD_LOAD: {
      return Object.assign({}, state, { whiteboards: action.data.whiteboards });
    }
    default:
      return state;
  }
};

const internalLoadWhiteboards = whiteboards => ({
  type: WHITEBOARD_LOAD,
  data: {
    whiteboards,
  },
});

const internalAddWhiteboard = value => ({
  type: WHITEBOARD_ADD,
  data: {
    title: value.title,
  },
});

const getAllWhiteboards = () => dispatch => whiteboardAPI.getAll()
  .then((whiteboards) => {
    dispatch(internalLoadWhiteboards(whiteboards));
  })
  .catch((err) => {
    console.log(err);
  });

const addWhiteboard = value => dispatch => whiteboardAPI.add(value)
  .then(() => {
    dispatch(getAllWhiteboards());
    dispatch(internalAddWhiteboard(value));
  });

export { addWhiteboard, getAllWhiteboards };
export default reducer;
