import React from 'react';
import { NavLink } from 'react-router-dom';
import whiteboardPropTypes from './Whiteboard.props';
import './Whiteboard.css';

const Whiteboard = props => (
  <div className="Whiteboard">
    <NavLink to={`/whiteboard/${props.id}`}>{props.title}</NavLink>
  </div>
);

Whiteboard.propTypes = whiteboardPropTypes;

export default Whiteboard;
