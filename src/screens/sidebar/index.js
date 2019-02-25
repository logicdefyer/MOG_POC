import React from "react";
import { AppRegistry, Image, StatusBar,ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Dashboard", "Screen1", "Screen2","Screen3"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../../assets/drawer-cover.png')}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Image
              square
              style={{ height: 80, width: "100%" }}
              source={require('../../../assets/logo-kitchen-sink.png')}
            />
          </ImageBackground>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
