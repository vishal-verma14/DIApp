import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  SearchBar,
} from 'react-native';
import {searchImage} from '../res';

const {width, height} = Dimensions.get('window');

export default class SearchHeader extends Component {
  constructor(props) {
    super(props);
    //setting default state

    this.arrayholder = [];
  }

  renderInput() {
    return (
      <TextInput
        style={styles.textMain}
        placeholder="Search"
        onChangeText={text => this.props.SearchFilterFunction(text)}
      />
    );
  }
  renderIcon() {
    return (
      <TouchableOpacity
        style={{
          height: 50,
          width: 30,
          justifyContent: 'center',
        }}>
        <Image source={searchImage.source} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          {this.renderInput('Item', styles.textMain)}
        </View>
        {this.renderIcon()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textMain: {
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: 'black',
    fontSize: 15,
    marginTop: 10,
  },
});
