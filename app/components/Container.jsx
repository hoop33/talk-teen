import React from 'react';
import Title from './Title.jsx';
import UserEntry from './UserEntry.jsx';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Title />
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <UserEntry />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <UserEntry />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <UserEntry />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <UserEntry />
          </div>
        </div>
      </div>
    );
  }
};

