import React from 'react';
import Container from './Container.jsx';
import Mashape from '../mashape';

const URBAN_DICTIONARY_URL = 'https://mashape-community-urban-dictionary.p.mashape.com/define';


export default class App extends React.Component {
  render() {
    return <Container url={URBAN_DICTIONARY_URL} mashapeKey={Mashape.key}/>;
  }
};
