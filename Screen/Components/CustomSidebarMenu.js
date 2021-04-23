import React, { useState, useEffect } from "react";
import { View, Text, Alert, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomSidebarMenu = (props) => {
  // const username = AsyncStorage.getItem("user_name");
  // console.log(username);
  // const [name, setName] = useState("Shivraj");
  // console.log(name);
  // useEffect(() => {
  //   retrieveData();
  // }, [name]);

  // const retrieveData = async () => {
  //   try {
  //     const name = await AsyncStorage.getItem("user_name");
  //     setName(name);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          {!global.image == "" ? (
            <Image style={stylesSidebar.avatar} source={{ uri: global.image }} />
          ) : (
            <Image
              style={stylesSidebar.avatar}
              source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
            />
          )}
          {/* <Image style={stylesSidebar.avatar} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} /> */}
        </View>
        <Text style={stylesSidebar.profileHeaderText}>Hi, {global.name}</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
      <DrawerContentScrollView {...props}>
        <View style={{ marginTop: -40 }}>
          {/* <DrawerItemList {...props} /> */}
          <DrawerItem
            activeTintColor="green"
            activeBackgroundColor="blue"
            inactiveBackgroundColor="#900000"
            icon={() => <Icon name="home" color="#fff" size={25} />}
            label={({ color }) => <Text style={{ color: "#d8d8d8", fontSize: 20 }}>Home</Text>}
            onPress={() => props.navigation.navigate("homeScreenStack")}
          />
          <DrawerItem
            activeTintColor="#fff"
            activeBackgroundColor="blue"
            inactiveBackgroundColor="#900000"
            icon={() => <Icon name="perm-identity" color="#fff" size={25} />}
            label={({ color }) => <Text style={{ color: "#d8d8d8", fontSize: 20 }}>Profile</Text>}
            onPress={() => props.navigation.navigate("settingScreenStack")}
          />
          <DrawerItem
            activeTintColor="#fff"
            activeBackgroundColor="blue"
            inactiveBackgroundColor="#900000"
            icon={() => <Icon name="people" color="#fff" size={25} />}
            label={({ color }) => <Text style={{ color: "#d8d8d8", fontSize: 20 }}>Matching</Text>}
            onPress={() => props.navigation.navigate("Matching")}
          />
          <DrawerItem
            activeTintColor="#fff"
            activeBackgroundColor="blue"
            inactiveBackgroundColor="#900000"
            icon={() => <Icon name="list" color="#fff" size={25} />}
            label={({ color }) => <Text style={{ color: "#d8d8d8", fontSize: 20 }}>All User Listing</Text>}
            onPress={() => props.navigation.navigate("User Listing")}
          />
          <DrawerItem
            activeTintColor="#fff"
            activeBackgroundColor="blue"
            inactiveBackgroundColor="#900000"
            icon={() => <Icon name="logout" color="#fff" size={25} />}
            label={({ color }) => <Text style={{ color: "#d8d8d8", fontSize: 20 }}>Logout</Text>}
            onPress={() => {
              props.navigation.toggleDrawer();
              Alert.alert(
                "Logout",
                "Are you sure? You want to logout?",
                [
                  {
                    text: "Cancel",
                    onPress: () => {
                      return null;
                    },
                  },
                  {
                    text: "Confirm",
                    onPress: () => {
                      AsyncStorage.clear();
                      props.navigation.replace("Auth");
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#900000",
    paddingTop: 30,
    color: "white",
  },
  profileHeader: {
    flexDirection: "column",
    backgroundColor: "#900000",
    padding: 10,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 150,
    height: 150,
    borderRadius: 10,
    color: "white",
    backgroundColor: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "white",
    alignSelf: "flex-start",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 10,
    backgroundColor: "#e2e2e2",
    marginTop: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
  },
});
