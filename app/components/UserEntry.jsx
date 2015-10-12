import React from 'react';

export default class UserEntry extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="teen">Teen words</label>
          <input type="text" className="form-control" id="teen" placeholder="What your teen said" onChange={this.textChanged} />
          <p className="help-block pull-right">{this.state.characterCount}</p>
        </div>
        <button type="submit" className="btn btn-default">Translate</button>
      </form>
    );
  }
  state = {
    characterCount: 0
  }
  textChanged = (e) => {
    this.setState({
      characterCount: e.target.value.length
    });
  }
};
