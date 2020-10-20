import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import aku from '../assets/aku.jpg';
import bg from '../assets/gradient.jpg';

export class profil extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: '',
    };
  }

  Logout() {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  Login() {
    const {email, pass} = this.state;
    var kirimData = {email: email, password: pass, mobile: true};
    var formBody = [];
    for (var key in kirimData) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(kirimData[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch('http://restful-api-laravel-7.herokuapp.com/api/login', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        const {token} = responseJSON;
        if (token) {
        }
      });
  }

  render() {
    return (
      <View>
        <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
          <View style={{margin: 20}}>
            <View>
              <Image
                source={aku}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  borderWidth: 5,
                  borderColor: 'white',
                  alignSelf: 'center',
                }}
              />
            </View>
            <Text
              style={{textAlign: 'center', marginVertical: 20, color: 'white'}}>
              D:
            </Text>
            <TouchableOpacity onPress={() => this.Logout()}>
              <View
                style={{
                  backgroundColor: 'aqua',
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  elevation: 5,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Logout</Text>
              </View>
            </TouchableOpacity>
            {/* <View style={{marginTop: 20}}>
              <TextInput
                placeholder="Email"
                onChangeText={(input) => this.setState({email: input})}
              />
              <TextInput
                placeholder="Password"
                onChangeText={(input) => this.setState({pass: input})}
              />
            </View>
            <View>
              <TouchableOpacity onPress={() => this.Login()}>
                <View
                  style={{
                    backgroundColor: 'aqua',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    elevation: 5,
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Sign In
                  </Text>
                </View>
              </TouchableOpacity>
            </View> */}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default profil;
