import React from 'react';
import Title from './Title.jsx';
import UserEntry from './UserEntry.jsx';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Title
          title="Talk Teen"
          subtitle="Communicate with the incomprehensible"
        />
        <UserEntry />
      </div>
    );
  }
};

