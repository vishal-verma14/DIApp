import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class ListItem extends Component {
  renderTitle(text, sty) {
    return <Text style={sty}>{text}</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderTitle(this.props.id, styles.textMain)}
        {this.renderTitle(this.props.title, styles.textDescription)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: 'white',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    padding: 10,
    elevation: 15,
  },

  textMain: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: 'red',
  },
  textDescription: {
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: 'black',
    fontSize: 10,
  },
});
