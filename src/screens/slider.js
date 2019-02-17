import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';


const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/pages/1.jpg'),
    imageStyle: styles.image,
    colors: ['#59b2ab', '#59b2ab'],
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/pages/2.jpeg'),
    imageStyle: styles.image,
    colors: ['#febe29', '#febe29'],
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../assets/pages/3.jpeg'),
    imageStyle: styles.image,
    colors: ['#22bcb5', '#22bcb5'],
  },
];

export default class SliderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('Welcome');
  }
  _renderItem = props => (
  	<View style={{flex:1}}>
    <LinearGradient
      style={[
        styles.mainContent,
        {
          paddingTop: props.topSpacer,
          paddingBottom: props.bottomSpacer,
          width: props.width,
          height: props.height,
        },
      ]}
      colors={props.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <Image
        style={props.imageStyle}
        name={props.icon}
        source={props.image}
      />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
    </View>
  );
  

  render() {
    return (
      <AppIntroSlider
      renderItem={this._renderItem}
        slides={slides}
        bottomButton
        // showPrevButton
        // showSkipButton
        // hideNextButton
        // hideDoneButton
        onSkip={() => console.log("skipped")}
        onDone={this._onDone}
      />

    );
  }
}
