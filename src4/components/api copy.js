import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles/dashboard';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import gradient from '../assets/gradient.jpg';
import trash from '../assets/trash.png';
import ImagePicker from 'react-native-image-picker';

export class api extends Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
      data: [],
      task: '',
      desc: '',
      image: '',
      isDone: '0',
      avatarSource: {
        uri: 'https://static.thenounproject.com/png/1560819-200.png',
      },
      token: '',
      modal: 'true',
      photo: '',
      editId: null,
      editTask: '',
      editDesc: '',
      editIsDone: false,
      editPhoto: '',
    };
  }

  getToken() {
    AsyncStorage.getItem('token')
      .then((token) => {
        if (token !== null) {
          this.setState({token: token});
        } else {
          alert('Token hilang!');
        }
      })
      .then(() => this.getTodos());
  }

  addData() {
    const {task, desc, photo} = this.state;
    if (task !== '' && desc !== '' && photo !== '') {
      const todo = {
        task: task,
        desc: desc,
        is_done: 0,
      };
      fetch('http://restful-api-laravel-7.herokuapp.com/api/todo', {
        method: 'POST',
        body: this.createFormData(photo, todo),
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) console.log('Upload succes.', response);
          alert('Data ditambahkan!');
          this.getTodos();
        })
        .catch((error) => {
          console.log('Upload error', error);
          alert('Gagal ditambahkan');
        });
    } else {
      alert('Isi dengan benar');
    }
  }

  getTodos() {
    console.log(this.state.token);
    fetch('http://restful-api-laravel-7.herokuapp.com/api/todo/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const {status} = responseJson;
        if (status) {
          alert(status);
        } else {
          this.setState({data: responseJson});
          console.log(responseJson);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  saveData() {
    AsyncStorage.setItem('item', JSON.stringify(this.state.data)).catch((err) =>
      console.log(err),
    );
  }

  deleteData(id) {
    fetch(`http://restful-api-laravel-7.herokuapp.com/api/todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const {status} = json;
        if (status == 'success') {
          this.getTodos();
        } else {
          alert('Gagal menghapus');
        }
      });
  }
  componentDidMount() {
    this.getToken();
  }

  createFormData = (photo, body) => {
    const data = new FormData();

    data.append('image', {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });

    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });

    return data;
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  // editData(data = null){
  //   if(data !== null) {
  //     this.setState({

  //     })
  //   }
  // }

  render() {
    console.log(this.state.photo);
    return (
      <View>
        <ImageBackground source={gradient} style={styles.bg}>
          <ScrollView>
            <View style={{margin: 20}}>
              <Text style={styles.textTitle}>
                {' '}
                Got something to do, Radiant?{' '}
              </Text>
            </View>
            <View style={styles.mainView}>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.addData()}>
                  <View style={styles.viewPlus}>
                    <Text style={styles.textPlus}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}
                onPress={() => this.handleChoosePhoto()}>
                {this.state.photo !== '' ? (
                  <Image
                    source={{uri: this.state.photo.uri}}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 25,
                      marginVertical: 10,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: 'gray',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      marginVertical: 15,
                    }}>
                    <Text style={{color: 'white', textAlign: 'center'}}>
                      Upload an Image
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
              <View style={{alignItems: 'center', marginBottom: 15}}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Title..."
                  placeholderTextColor="white"
                  selectionColor="pink"
                  onChangeText={(input) => this.setState({task: input})}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Desc..."
                  placeholderTextColor="white"
                  selectionColor="pink"
                  onChangeText={(input) => this.setState({desc: input})}
                />
              </View>
              {this.state.data.map((value, index) => (
                <View style={styles.viewList} key={value.id}>
                  <View
                    style={{
                      flexDirection: 'row',
                      margin: 20,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{
                        uri: `http://restful-api-laravel-7.herokuapp.com/img/${value.image}`,
                      }}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                    />
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: 20,
                        }}>
                        {value.task}
                      </Text>
                      <Text style={{color: 'pink'}}>{value.desc}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.deleteData(value.id)}>
                      <Image
                        source={trash}
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: '#fff',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default api;
