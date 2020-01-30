import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import {plusImage} from '../res';

const {width, height} = Dimensions.get('window');

class Header extends Component {
  renderTitle(text) {
    return <Text style={styles.textMain}>{text}</Text>;
  }
  renderIcon() {
    return (
      <TouchableOpacity
        style={{
          marginTop: Platform.OS === 'ios' && height >= 812 ? 40 : 20,
          justifyContent: 'center',
        }}
        onPress={() => this.props.AddNewData()}>
        <Image source={plusImage.source} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          {this.renderTitle('ITEMS', styles.textMain)}
        </View>
        {this.renderIcon()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' && !Platform.isPad && height >= 812 ? 84 : 64,
    width,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    padding: 10,
    elevation: 15,
    flexDirection: 'row',
  },

  textMain: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 1,
  },
});

export default Header;
