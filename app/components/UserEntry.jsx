import React from 'react';

export default class UserEntry extends React.Component {
  render() {
    return (
      <form onSubmit={this.translate}>
        <div className="form-group">
          <label htmlFor="teen">Teen words</label>
          <input type="text" className="form-control" id="teen" ref="teen" value={this.state.text} placeholder="What your teen said" onChange={this.textChanged} />
          <p className="help-block pull-right">{this.state.text.length}</p>
        </div>
        <button type="submit" className="btn btn-default">Translate</button>
      </form>
    );
  }
  state = {
    text: ''
  }
  textChanged = (e) => {
    this.setState({
      text: e.target.value
    });
  }
  translate = (e) => {
    e.preventDefault();
    this.props.onTranslate(this.refs.teen.value);
    this.setState({
      text: ''
    });
  }
};
