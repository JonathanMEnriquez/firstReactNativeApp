// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a component
// Nest components
const App = () => {
    return (
        <Header />
    );
};
// render it to the device

AppRegistry.registerComponent('albums', () => App);