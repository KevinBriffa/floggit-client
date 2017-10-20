import React from 'react';
import noteFormProps from './NoteForm.props';
import './NoteForm.css';
import ColorSelect from './components/ColorSelect';
import { NOTE_COLORS } from '../../../../../utils/constants';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      infoItemInput: '',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleAddInfoItem = this.handleAddInfoItem.bind(this);
    this.handleRemoveInfoItem = this.handleRemoveInfoItem.bind(this);
    this.handleSaveNote = this.handleSaveNote.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.storeInfoItem = this.storeInfoItem.bind(this);
  }

  componentWillMount() {
    this.props.onDisplayNotes(this.props.whiteboardId);
  }

  handleChangeTitle(event) {
    this.props.onTitleUpdate(event.target.value);
  }

  handleChangeColor(event) {
    this.props.onColorUpdate(event.target.value);
  }

  handleAddInfoItem(event) {
    this.setState({ infoItemInput: event.target.value });
    this.props.onAddInfoItem(this.state.infoItemInput);
    this.setState({ infoItemInput: '' });
  }

  handleRemoveInfoItem(id) {
    this.props.onRemoveInfoItem(id);
  }

  storeInfoItem(change) {
    this.setState({
      infoItemInput: change.target.value,
    });
  }

  handleSaveNote() {
    this.props.onSaveNote();
  }

  handleCloseForm() {
    this.props.onCloseForm();
  }
  render() {
    return (
      <div className={`NoteForm ${this.props.color}`}>
        <input
          type="text"
          value={this.props.title}
          onChange={this.handleChangeTitle}
          placeholder="Add title"
          disabled={this.props.isLoading}
        /><br />
        <div className="one-line-input">
          <input
            type="text"
            placeholder="Add information"
            value={this.state.infoItemInput}
            disabled={this.props.isLoading}
            onChange={this.storeInfoItem}
          />
          <button
            type="button"
            onClick={this.handleAddInfoItem}
            disabled={this.props.isLoading}
          >
            Add
          </button>
        </div>
        <ul className="generic-list info-list">
          {this.props.information.map(infoItem => (
            <li key={infoItem.id}>{infoItem.text}
              <button
                className="icon-button danger"
                type="button"
                disabled={this.props.isLoading}
                onClick={() => this.handleRemoveInfoItem(infoItem.id)}
              >
                <i className="fa fa-trash" />
              </button>
            </li>
          ))}
        </ul>
        <ColorSelect
          colors={NOTE_COLORS}
          selectedColor={this.props.color}
          onColorUpdate={this.handleChangeColor}
          disabled={this.props.isLoading}
        />
        <button
          type="button"
          onClick={this.handleSaveNote}
          disabled={this.props.isLoading}
        >
          {this.props.id ? 'Update note' : 'Save Note'}
        </button>
        <button
          className="secondary"
          type="button"
          onClick={this.handleCloseForm}
          disabled={this.props.isLoading}
        >
        Cancel
        </button>
      </div>
    );
  }
}

NoteForm.propTypes = noteFormProps;

export default NoteForm;
