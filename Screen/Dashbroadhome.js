import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width } = Dimensions.get("screen");
class Dashbroadhome extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#fff", flex: 1, width: width }}>
          <View style={{ justifyContent: "space-evenly" }}>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Card containerStyle={styles.card}>
                <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                  <Icon name="dashboard" size={40} color="#fff" />
                  {/* <Text style={{ color: "#fff", fontSize: 25, marginLeft: 120 }}>{this.state.credit}</Text> */}
                  <Card.Title style={{ color: "#fff", fontSize: 30, justifyContent: "center", marginLeft: 20 }}>
                    Dashbaord
                  </Card.Title>
                </View>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("settingScreenStack")}>
              <Card containerStyle={styles.card1}>
                <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                  <Icon name="perm-identity" size={40} color="#fff" />

                  <Card.Title style={{ color: "#fff", fontSize: 30, marginLeft: 20, justifyContent: "center" }}>
                    User Profile
                  </Card.Title>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "space-evenly" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Matching")}>
              <Card containerStyle={styles.card2}>
                <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                  <Icon name="people" size={40} color="#fff" />
                  <Card.Title style={{ color: "#fff", fontSize: 30, marginLeft: 20, justifyContent: "center" }}>
                    Matching Profile
                  </Card.Title>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "space-evenly" }}>
            <TouchableOpacity onPress={() => navigation.navigate("User Listing")}>
              <Card containerStyle={styles.card2}>
                <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                  <Icon name="list" size={40} color="#fff" />
                  <Card.Title style={{ color: "#fff", fontSize: 30, marginLeft: 20, justifyContent: "center" }}>
                    All User List
                  </Card.Title>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Dashbroadhome;
const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 350,
    backgroundColor: "#900",
    alignSelf: "center",
    justifyContent: "center",
  },
  card1: {
    height: 120,
    width: 350,
    backgroundColor: "#900",
    alignSelf: "center",
    justifyContent: "center",
  },
  card2: {
    height: 120,
    width: 350,
    backgroundColor: "#900",
    alignSelf: "center",
    justifyContent: "center",
  },
  card3: {
    height: 120,
    width: 350,
    backgroundColor: "#23709e",
    alignSelf: "center",
    justifyContent: "center",
  },
});
