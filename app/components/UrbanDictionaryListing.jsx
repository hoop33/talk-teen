import React from 'react';

export default class UrbanDictionaryListing extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.props.listing.word}
          </h3>
        </div>
        <div className="panel-body">
          <p className="lead">
            {this.props.listing.definition}
          </p>
          <p>
            Example: {this.props.listing.example}
          </p>
        </div>
        <div className="panel-footer">
          Author: {this.props.listing.author}
        </div>
      </div>
    );
  }
};

