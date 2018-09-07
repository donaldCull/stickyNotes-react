import React, { Component } from 'react';
import { FaPencilAlt, FaTrash, FaFile } from 'react-icons/fa';

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
    this.renderDisplay = this.renderDisplay.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.save = this.save.bind(this)
  }
  edit() {
    this.setState({editing: true})
  }

  remove() {
    this.props.onRemove(this.props.index)
  }

  save(e) {
    e.preventDefault();
    this.props.onChange(this._newText.value, this.props.index)
    this.setState({
      editing: false
    });
  }

  renderForm() {
    return (
      <div className="note">
        <form>
          <textarea ref={input => this._newText = input}/>
          <button onClick={this.save}> <FaFile/> </button>
        </form>
      </div>
    )
  }

  renderDisplay() {
    return (
      <div className="note">
      <p className="noteText">{this.props.children}</p>
      <span className="buttonBar">
        <button onClick={this.edit} id="edit"> <FaPencilAlt /> </button>
        <button onClick={this.remove} id="remove"> <FaTrash /> </button>
      </span>
      </div>
    );
  }
  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

export default Note;
