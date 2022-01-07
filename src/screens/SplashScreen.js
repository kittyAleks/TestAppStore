import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native'
import { Button } from 'react-native-elements'

export const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      {/*<ImageBackground*/}
      {/*  style={{ flex: 1, width: '100%', height: 1000}}*/}
      {/*  resizeMode='cover'*/}
      {/*  source={require('../img/main_image.jpg')}*/}
      {/*  blurRadius={2}>*/}
      {/*</ImageBackground>*/}
      <ScrollView style={styles.buttonGroupStyle}>
        <View style={styles.center}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={{ ...styles.title, ...styles.info }}>
            my food app
          </Text>
        </View>
        <Button
          title='SIGN IN'
          onPress={() => navigation.navigate('SignIn')}
          buttonStyle={{ ...styles.button, ...styles.buttonSignIn }}
          titleStyle={styles.titleSignIn}
        />
        <Button
          title='SIGN UP'
          onPress={() => navigation.navigate('SignUp')}
          buttonStyle={{ ...styles.button, ...styles.buttonSignUp }}
          titleStyle={styles.titleSignUp}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#d9bebe'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    color: 'white'
  },
  buttonGroupStyle: {
    flexDirection: 'column',
    paddingHorizontal: 30,
    textAlign: 'center',
    paddingVertical: 200,
  },
  inputStyle: {
    paddingLeft: 20,
    marginTop: 15,
    borderRadius: 10,
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    // opacity: 0.7
  },
  button: {
    marginLeft: 5,
    marginTop: 30,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    // opacity: 1,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonSignUp: {
    backgroundColor: 'white'
  },
  buttonSignIn: {
    backgroundColor: '#ff9c9b'
  },

  titleSignIn: {
    color: 'white',
  },
  titleSignUp: {
    color: '#ff9c9b',
  },
  title: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center'
  },
  center: {
    paddingTop: 3,
  },
  info: {
    fontSize: 20,
    marginHorizontal: 20,
    margin: 20
  },

});
