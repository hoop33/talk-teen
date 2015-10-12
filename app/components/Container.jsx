import React from 'react';
import $ from 'jquery';
import Title from './Title.jsx';
import UserEntry from './UserEntry.jsx';
import UrbanDictionaryListing from './UrbanDictionaryListing.jsx';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Title
          title="Talk Teen"
          subtitle="Communicate with the incomprehensible"
        />
        <UserEntry 
          onTranslate={this.translate}
        />
        {
          this.state.listings.map(function(listing) {
            return (
              <UrbanDictionaryListing key={listing.defid} listing={listing} />
            );
          }, this)
        }
      </div>
    );
  }
  state = {
    listings: []
  }
  translate = (text) => {
    var key = this.props.mashapeKey;
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'GET',
      data: {
        'term': text
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-Mashape-Key', key);
      },
      success: function(data) {
        this.setState({listings: data.list});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
};

