// import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
// Nest components
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

// render it to the device

AppRegistry.registerComponent('albums', () => App);