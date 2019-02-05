import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as data from '../userjson.json';

// export default class HomeScreen extends React.Component {
//     render() {
//         return (
//           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>
//             {data.image}
//             </Text>
//             <Image
//               source={require('../assets/image.jpg')}
//             />
//           </View>
//         );
//     } 
// }
class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
          {data.image}
          </Text>
          <Image
            source={require('../assets/image.jpg')}
          />
        </View>
      );
    }  
  }
