import React from 'react';
import WhiteboardList from './components/WhiteboardList';
import whiteboardWrapperProps from './WhiteboardWrapper.props';
import './WhiteboardWrapper.css';

const WhiteboardsWrapper = (props) => {
  let inputText;
  const handleText = () => {
    if (!inputText.value.length < 1) {
      props.handleCreateWhiteboard(inputText.value);
      inputText.value = '';
    }
  };

  const displayForm = () => (
    <div className="WhiteboardWrapper-Container">
      <input
        type="text"
        ref={(v) => { inputText = v; }}
      />
      <button
        onClick={handleText}
      >
          Add
      </button>
    </div>
  );

  return (
    <div>
      {displayForm()}
      {(props.whiteboards !== undefined) ?
        <WhiteboardList
          whiteboards={props.whiteboards}
        /> : ' '}
    </div>
  );
};

WhiteboardsWrapper.propTypes = whiteboardWrapperProps;

export default WhiteboardsWrapper;
