import React from 'react';
import Whiteboard from './components/Whiteboard';
import WhiteboardListProps from './WhiteboardList.props';
import './WhiteboardList.css';

const WhiteboardList = props => (
  <div className="WhiteboardListContainer">
    <ul>
      {props.whiteboards.map(whiteboard => (
        <li key={whiteboard.id}>
          <Whiteboard
            id={whiteboard.id}
            title={whiteboard.title}
          />
        </li>
      ))}
    </ul>
  </div>
);

WhiteboardList.propTypes = WhiteboardListProps;

export default WhiteboardList;
