//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { fcmService } from './app/Notification/FCMService';
import { localNotificationService } from './app/Notification/LocalNotificationService';

// create a component
const App = () => {

  useEffect(()=>{
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification)
  },[])


  const onRegister = (token) => {
    console.log("[App] Token", token);
  }

  const onNotification = (notify) => {
    // console.log("[App] onNotification", notify);
    const options = {
      soundName: 'default',
      playSound: true,
    }

    localNotificationService.showNotification(
      0,
      notify.notification.title,
      notify.notification.body,
      notify,
      options,
    )
  }

  const onOpenNotification = async (notify) => {
  
    console.log('notify', notify);
  }




  return (
    <View style={styles.container}>
        <Image 
        style={{width:200,height:200}}
        source={{uri:'https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png'}}
        />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;
