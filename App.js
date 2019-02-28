import React from 'react';
import AppContainer from './src/navigation/navigation';
import Setup from "./src/boot/setup";
import {ToastAndroid} from 'react-native';

var PushNotification = require('react-native-push-notification');

PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
      console.warn( 'TOKEN:', token );
    },

    // // (required) Called when a remote or local notification is opened or received
    // onNotification: function(notification) {
    //     console.log( 'NOTIFICATION:', notification );

    //     // process the notification

    //     // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
    //     notification.finish(PushNotificationIOS.FetchResult.NoData);
    // },
    onNotification: function(notification) {
      setTimeout(() => {
        if(!notification['foreground']){
          ToastAndroid.show("You've clicked!", ToastAndroid.SHORT);
        }
      }, 1);
      PushNotification.localNotificationSchedule({
        title: 'Notification with my name',
        message: notification['name'], // (required)
        date: new Date() // in 60 secs
      });
    },

    // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
    senderID: "1084705284079",

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
      * (optional) default: true
      * - Specified if permissions (ios) and token (android and ios) will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    requestPermissions: true,
});
class App extends React.Component {
  render() {
    // return <AppContainer />;
    return <Setup />;

  }
}

export default App;