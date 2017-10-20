import React from 'react';
import Note from './components/Note';
import NoteFormContainer from '../NoteFormContainer';
import noteListProps from './NoteList.props';
import './NoteList.css';

const NoteList = props => (
  <div>
    <ul className="NoteList">
      {props.activeForm && !props.noteFormId ?
        <li><NoteFormContainer whiteboardId={props.whiteboardId} /></li> : ''}
      {props.notes.filter(note => (note.display))
        .filter(note => (note.whiteboardId === props.whiteboardId))
        .map(note => (
          <li key={note.id}>
            {props.activeForm && note.id === props.noteFormId ?
              <NoteFormContainer whiteboardId={props.whiteboardId} /> :
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                color={note.color}
                information={note.information}
                onRemoveNote={props.onRemoveNote}
                onUpdateNote={props.onUpdateNote}
              />
            }
          </li>
        ))}
    </ul>
  </div>
);

NoteList.propTypes = noteListProps;

export default NoteList;
