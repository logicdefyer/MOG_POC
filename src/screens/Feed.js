import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, Button, TextInput,Platform,TouchableOpacity } from 'react-native';
import {Colors, Fonts} from '../constants';


const chartIcon = require('../../assets/pages/chart.png');
const calendarIcon = require('../../assets/pages/calendar.png');
const chatIcon = require('../../assets/pages/chat.png');
const galleryIcon = require('../../assets/pages/gallery.png');
const profileIcon = require('../../assets/pages/profile.png');

export default class Feed extends Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={chartIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Charts</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={galleryIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={profileIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={chatIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Chats</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={styles.item}>
                <Image
                  resizeMode="contain"
                  source={calendarIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Calendar</Text>
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
      backgroundColor: Colors.white,
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