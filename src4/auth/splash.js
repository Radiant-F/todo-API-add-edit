import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import Navigator from '../router/navigator';

export class splash extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({status: false});
    }, 2000);
  }

  render() {
    if (this.state.status) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="blue" />
          <Text>Bismillah..</Text>
        </View>
      );
    } else {
      return <Navigator />;
    }
  }
}

export default splash;
