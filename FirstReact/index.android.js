/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

class FirstReact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }
  onPressButton = () => {
    
  }
  render(){
    return (
      <View style={styles.container}>
  
        <TouchableOpacity style={[this.state.active && styles.active]} onPress={() => this.setState({active: !this.state.active})}>
          <Text> Button </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  active:{
    backgroundColor: 'red',
  }
});

AppRegistry.registerComponent('FirstReact', () => FirstReact);
