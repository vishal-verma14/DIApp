import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import {Header, ListItem, SearchHeader} from '../components';

export default class AddDataScene extends Component {
  render() {
    return (
      <View>
        <Header onBack={() => this.props.navigation.goBack()} />
        <Text style={{margin: 10}}> Please Fill Details </Text>
        <TextInput style={styles.textMain} />
        <TextInput style={styles.textMain} />
        <Button title="SUBMIT" style={{borderColor: '#003', borderWidth: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textMain: {
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: 'black',
    fontSize: 15,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
  },
});
