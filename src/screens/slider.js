import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Image, Dimensions,Alert} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import Button from 'react-native-flat-button'


const { width, height } = Dimensions.get('window');

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

  // text: {
  //   color: 'rgba(255, 255, 255, 0.8)',
  //   backgroundColor: 'transparent',
  //   textAlign: 'center',
  //   paddingHorizontal: 16,
  // },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    width: 200,
    height: 50,
    marginVertical: 5
  },
  content:{
    fontSize: 22
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/pages/1.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/pages/2.jpeg'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../assets/pages/3.jpeg'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];

export default class SliderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height }
    };
  };
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
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
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          style={this.state.size}
          autoplay={false}
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[{ backgroundColor: '#59b2ab' }, this.state.size, styles.mainContent ]}>
            <Image source = {slides[0].image} style={styles.image}></Image>
            <Button title="SKIP"
              onPress={() => this.props.navigation.navigate('Welcome')}
              type="negative"
              borderRadius={10}
              shadowHeight={5}
              containerStyle={styles.buttonContainer}
              contentStyle={{ fontSize: 22, fontWeight: '900' }}>
              skip
            </Button>
          </View>
          <View style={[{ backgroundColor: '#febe29' }, this.state.size, styles.mainContent]}>
          <Image source = {slides[1].image} style={styles.image}></Image>
          <Button title="SKIP"
              onPress={() => this.props.navigation.navigate('Welcome')}
              type="negative"
              borderRadius={10}
              shadowHeight={5}
              containerStyle={styles.buttonContainer}
              contentStyle={{ fontSize: 22, fontWeight: '900' }}>
              skip
            </Button>
          </View>
          <View style={[{ backgroundColor: '#22bcb5' }, this.state.size, styles.mainContent]}>
          <Image source = {slides[2].image} style={styles.image}></Image>
          <Button title="SKIP"
              onPress={() => this.props.navigation.navigate('Welcome')}
              type="negative"
              borderRadius={10}
              shadowHeight={5}
              containerStyle={styles.buttonContainer}
              contentStyle={{ fontSize: 22, fontWeight: '900' }}>
              DONE
            </Button>
          </View>
        </Carousel>
      </View>
    );
  }
}
