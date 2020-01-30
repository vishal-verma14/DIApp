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
  FlatList,
} from 'react-native';
import {searchImage} from '../res';
import {Header, ListItem, SearchHeader} from '../components';

const DATA = [
  {
    id: 'item 1',
    title: 'First Item',
  },
  {
    id: 'item 2',
    title: 'Second Item',
  },
  {
    id: 'item 3',
    title: 'Third Item',
  },
];

export default class MainScene extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = {
      isLoading: true,
      text: '',
      currentText: '',
      dataSource: DATA,
    };
    this.arrayholder = DATA;
  }

  onCallBack(text) {
    this.setState({
      text: text,
    });
  }

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      text: text,
    });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  renderBody() {
    return (
      <FlatList
        data={this.state.dataSource}
        ItemSeparatorComponent={this.ListViewItemSeparator}
        renderItem={({item}) => <ListItem id={item.id} title={item.title} />}
        keyExtractor={item => item.id}
      />
    );
  }

  renderInput() {
    return (
      <TextInput
        style={styles.textMain}
        placeholder="Search"
        onChangeText={text => this.SearchFilterFunction(text)}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
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
      <View>
        <Header
          AddNewData={() => this.props.navigation.navigate('AddDataScene')}
        />
        <View style={styles.container}>
          <View style={{flex: 1}}>
            {this.renderInput('Item', styles.textMain)}
          </View>
          {this.renderIcon()}
        </View>
        {this.renderBody()}
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
