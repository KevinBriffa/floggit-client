import { combineReducers } from 'redux';
import notes from './notes';
import noteForm from './note-form';
import digitalWhiteboards from './whiteboard';

const reducer = combineReducers({
  notes,
  noteForm,
  digitalWhiteboards,
});

export default reducer;
