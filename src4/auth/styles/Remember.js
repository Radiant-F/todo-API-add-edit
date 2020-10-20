import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    backgroundColor: '#000000b3',
    margin: 20,
    borderRadius: 10,
    width: 380,
    height: 300,
    justifyContent: 'center',
  },
  mainText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    marginTop: 20,
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
    width: 20,
    height: 15,
    marginRight: 7,
    marginLeft: 9,
    tintColor: '#fff',
  },
  textInput: {
    width: '80%',
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
    marginTop: 10,
    marginBottom: 30,
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
    marginBottom: 20,
    marginTop: 10,
  },
});
