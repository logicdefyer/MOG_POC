import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, Button, TextInput,Platform,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Picker, Icon } from 'native-base';
import {Colors, Fonts} from '../constants';
import ImageSlider from 'react-native-image-slider';
import { SearchBar } from 'react-native-elements';


const AccessoriesIcon = require('../../assets/pages/Accessories.png');
const ApparelIcon = require('../../assets/pages/Apparel.png');
const ElectronicsIcon = require('../../assets/pages/Electronics.png');
const foodIcon = require('../../assets/pages/food.png');
const profileIcon = require('../../assets/pages/profile.png');
const petIcon = require('../../assets/pages/pet.png');


export default class Feed extends Component {
  _handleResults(results) {
    this.setState({ results });
  }
    render() {
        return (
          <View style={styles.container}>
          
          <ImageSlider
          style={{ height: "20%"}}
            autoPlayWithInterval={3000}
            images={[
              'https://placeimg.com/640/640/nature',
              'https://placeimg.com/640/640/people',
              'https://placeimg.com/640/640/animals',
              'https://placeimg.com/640/640/beer'
              ]}/>
              <SearchBar
                placeholder="Search"
                platform="ios"
              />
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={AccessoriesIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Accessories</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={foodIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>food</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={petIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Pet</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={ElectronicsIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Electronics</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={ApparelIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Apparel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={profileIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.yellow,
      paddingTop: 10,
    },
    row: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginTop: 10,
    },
    item: {
      flex: 1,
      height: 120,
      paddingVertical: 20,
      borderColor: Colors.primaryLight,
      borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
      marginHorizontal: 5,
    },
    itemText: {
      color: Colors.primary,
      fontFamily: Fonts.primary,
    },
    itemImage: {
      height: 35,
    },
  });