import React, {Component} from 'react';
import styles from './styles/Remember';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import bg from '../assets/bg.jpg';
import email from '../assets/email.png';

export default class Login extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={bg}
          style={styles.backgroundImage}
          blurRadius={2}>
          <View style={styles.mainView}>
            <Text style={styles.mainText}>Reset Password</Text>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 40,
                marginBottom: 10,
                color: 'white',
              }}>
              We will send your password through email. Make sure to check your
              spam!
            </Text>
            <View style={styles.textInputView}>
              <Image source={email} style={styles.textInputImage} />
              <TextInput
                selectionColor="#ff00ff"
                placeholderTextColor="white"
                placeholder={'Email'}
                style={styles.textInput}
                onChangeText={(name) => this.setState({loginData: name})}
              />
            </View>

            <TouchableOpacity
              onPress={() => Alert.alert('Email has been sent!')}>
              <View style={styles.textViewLogin}>
                <Text style={styles.textLogin}>Send Email</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
