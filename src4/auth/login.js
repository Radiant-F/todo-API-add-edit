import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles/Login';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import bg from '../assets/bg.jpg';
import avatar from '../assets/email.png';
import lock from '../assets/lock.png';

export default class Login extends Component {
  constructor(properti) {
    super(properti);
    this.state = {
      email: '',
      password: '',
    };
    AsyncStorage.getItem('token').then((value) => {
      console.log(value);
      if (value !== null) {
        this.props.navigation.navigate('API');
      } else {
        this.props.navigation.navigate('Login');
      }
    });
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    fetch('http://restful-api-laravel-7.herokuapp.com/api/todo/', {
      method: 'GET',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0ZnVsLWFwaS1sYXJhdmVsLTcuaGVyb2t1YXBwLmNvbVwvYXBpXC9yZWdpc3RlciIsImlhdCI6MTYwMjkxMjQyMCwiZXhwIjoxNjAyOTE2MDIwLCJuYmYiOjE2MDI5MTI0MjAsImp0aSI6IjVINWV0MUxwbkx2dTFXeXAiLCJzdWIiOjQ1LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.bacNT-rdIy8hjdj-KcL_qwuZNnYRwODfTK5PMAtFWiQ',
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  Login = () => {
    const {email, password} = this.state;
    var kirimData = {email: email, password: password, mobile: true};
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
        console.log(responseJSON);
        const {token} = responseJSON;
        if (token) {
          AsyncStorage.setItem('token', token);
          this.props.navigation.navigate('API');
        } else {
          alert('Make sure your data is correct.');
        }
      })
      .catch((err) => {
        alert('Something went wrong..');
      });
  };

  render() {
    return (
      <View>
        <ImageBackground
          source={bg}
          style={styles.backgroundImage}
          blurRadius={2}>
          <View style={styles.mainView}>
            <Text style={styles.mainText}>Sign In</Text>
            <View style={styles.textInputView}>
              <Image source={avatar} style={styles.textInputImage} />
              <TextInput
                selectionColor="#ff00ff"
                placeholder={'Email'}
                placeholderTextColor="white"
                style={styles.textInput}
                onChangeText={(name) => this.setState({email: name})}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.textInputView}>
              <Image source={lock} style={styles.textInputImage2} />
              <TextInput
                selectionColor="#ff00ff"
                placeholderTextColor="white"
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={(pass) => this.setState({password: pass})}
              />
            </View>
            <TouchableOpacity onPress={() => this.Login()}>
              <View style={styles.textViewLogin}>
                <Text style={styles.textLogin}>Login</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 35,
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Remember')}>
                <Text style={styles.textSubView}>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={styles.textSubView}>Sign up?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
