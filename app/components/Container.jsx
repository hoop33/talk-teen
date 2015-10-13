import React from 'react';
import Axios from 'axios';
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
        <div className="vspace">
          {
            this.state.listings.map(function(listing) {
              return (
                <UrbanDictionaryListing key={listing.defid} listing={listing} />
              );
            }, this)
          }
        </div>
      </div>
    );
  }
  state = {
    listings: []
  }
  translate = (text) => {
    Axios.get(this.props.url, {
      params: {
        term: text
      },
      headers: {
        'X-Mashape-Key': this.props.mashapeKey
      }
    })
    .then((response) => {
      this.setState({
        listings: response.data.list
      });
    })
    .catch((response) => {
      console.error(response);
    });
  }
};

