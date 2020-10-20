import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    backgroundColor: '#000000b3',
    margin: 20,
    borderRadius: 10,
    width: 380,
    height: 330,
    justifyContent: 'center',
  },
  mainText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    marginBottom: 10,
    textShadowColor: '#db66ff',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  subView: {
    margin: 10,
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#e48aff94',
    borderRadius: 5,
    height: 50,
    width: 300,
    marginVertical: 5,
  },
  textInputImage: {
    width: 25.5,
    height: 19,
    marginRight: 7,
    marginLeft: 6,
    tintColor: '#fff',
  },
  textInputImage2: {
    width: 25,
    height: 25,
    marginRight: 8,
    marginLeft: 6,
    tintColor: '#fff',
  },
  textInput: {
    width: '80%',
    color: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textViewLogin: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#d447ff',
    borderRadius: 5,
    height: 50,
    width: 300,
    marginTop: 15,
  },
  textLogin: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0.5,
      height: 0.5,
    },
  },
  textSwitchView: {
    justifyContent: 'space-between',
  },
  textSubView: {
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
    marginTop: 10,
  },
});
