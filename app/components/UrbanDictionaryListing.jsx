import React from 'react';
import Filter from 'bad-words';

const filter = new Filter();

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
            {filter.clean(this.props.listing.definition)}
          </p>
          <p>
            Example: {filter.clean(this.props.listing.example)}
          </p>
        </div>
        <div className="panel-footer">
          Author: {this.props.listing.author}
        </div>
      </div>
    );
  }
};

