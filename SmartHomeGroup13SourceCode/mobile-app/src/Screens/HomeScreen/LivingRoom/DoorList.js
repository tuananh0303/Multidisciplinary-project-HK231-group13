import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import io from "socket.io-client";

const DoorListLivingroom = ({ navigation }) => {
  const onHome = () => navigation.navigate("Home");

  const onLightListLivingroom = () =>
    navigation.navigate("LightListLivingroom");

  const onFanListLivingroom = () => navigation.navigate("FanListLivingroom");

  const onDoorListLivingroom = () => navigation.navigate("DoorListLivingroom")

  const [deviceData, setDeviceData] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const socket = io("http://10.0.2.2:8080");
    socket.on("deviceData", (data) => {
      console.log("Received device data:", data);
      const transformedData = {
        door: data.door === 1 ? true : false,
        fan: data.fan === 1 ? true : false,
        lamp: data.lamp === 1 ? true : false,
      };
      setDeviceData(transformedData);
      setChecked(transformedData.lamp); 
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleControl = (controlField, value) => {
    console.log("checked:", value);
    const updatedDeviceData = {
      ...deviceData,
      [controlField]: value,
    };
    setDeviceData(updatedDeviceData);
    console.log("updateControlData:", updatedDeviceData);
    const socket = io("http://10.0.2.2:8080");
    socket.emit("controlData", updatedDeviceData);
  };

  useEffect(() => {
    console.log("New device data:", deviceData);
    if (deviceData) {
      setChecked(deviceData.door); // Cập nhật trạng thái của Switch khi deviceData thay đổi
    }
  }, [deviceData]);

  const handleChange = (value) => {
    setChecked(value);
    handleControl("door", value);
  };

  return (
    <View flexDirection="column">
      <View style={styles.room}>
        <TouchableOpacity onPress={onHome}>
          <Entypo name="chevron-left" color={"white"} size={28} />
        </TouchableOpacity>
        <Text style={styles.baseText}>Living Room</Text>
      </View>
      <View style={[styles.status, styles.icon]}>
        <TouchableOpacity onPress={onLightListLivingroom}>
          <MaterialCommunityIcons
            name="lightbulb-on-outline"
            color={"#bcbcbc"}
            size={50}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onFanListLivingroom}>
          <MaterialCommunityIcons name="fan" color={"#bcbcbc"} size={50} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDoorListLivingroom}>
          <MaterialCommunityIcons name="door" color={"#00d1ff"} size={50} />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <View flexDirection="row">
          <Text style={styles.listText}>Door</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={checked ? "#f5dd4b" : "#f4f3f4"}
            onChange={handleChange}
            value={checked}
            paddingLeft="60%"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  baseText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "35%",
  },
  status: {
    backgroundColor: "white",
    width: "100%",
    height: 70,
    elevation: 10,
  },
  room: {
    backgroundColor: "#2A2A37",
    width: "100%",
    height: 70,
    flexDirection: "row",
    paddingTop: "5%",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  list: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: "5%",
    paddingTop: "5%",
  },
  listText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default DoorListLivingroom;
