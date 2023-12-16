import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import io from 'socket.io-client';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({ navigation }) => {

  const handlePress = () => {
  };
  const onLivingRoom = () => {
    navigation.navigate("Livingroom")
  };
  


  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(
      date + '/' + month + '/' + year
    );
  }, []);
  useEffect(() => {
    var hours = String(new Date().getHours()); //Current Hours
    var min = String(new Date().getMinutes()); //Current Minutes
    if (hours.length == 1) {
      hours = "0" + hours;
    }
    if (min.length == 1) {
      min = "0" + min;
    }
    setCurrentTime(
      hours + ':' + min
    );
  }, []);

  // const [temp, setTemp] = useState("default");
  // const [humi, setHumi] = useState("default");

  // const socket = io.connect('https://smart-home-react.onrender.com:443');
  // socket.on('temperatureUpdate', (temperature) => {
  //   console.log(`Temperature updated: ${temperature}`);
  //   setTemp(`temperature: ${temperature}`);
  // });
  // socket.on('humidityUpdate', (humidity) => {
  //   console.log(`Humidity updated: ${humidity}`);
  //   setHumi(`humidity: ${humidity}`);
  // });

  const [sensorData, setSensorData] = useState(null);
  useEffect(() => {
        const socket = io("http://10.0.2.2:8080"); // Kết nối tới server socket.io
        // console.log(socket.data)
        
        socket.on("sensorData", (data) => {
            console.log("Received sensor data:", data);
            setSensorData(data);
        });

        return () => {
        socket.disconnect(); // Ngắt kết nối khi component unmount
        };
    }, []);

  return (
    <View
      display="flex"
      alignItems="center"
      flexDirection="column"
      backgroundColor={"#fff"}
    >
          <View style={{alignItems: 'center', width: "100%", height: "25%"}}>
            <ImageBackground
              source={require('../../../assets/dashboard.jpg')}
              style={styles.backgroundImage}

            >
              <Text style={styles.baseText}>
                Your Smart Home
              </Text>
              <Text style={styles.address}>
                123A, Di An, Binh Duong
              </Text>
            </ImageBackground>
          </View>
      
      <View style={styles.overview}>
        <Text style={styles.baseText}>Overview</Text>
        <View style={styles.overviewContent}>
          <View style={styles.overviewItemLeft} >

            <Text style={styles.timeText}> {currentTime}</Text>
            <Text style={styles.dateText}> {currentDate}</Text>
          </View>
          <View style={styles.overviewItemRight} >
            <View display="flex" flexDirection="row" style={{justifyContent: 'space-between'}}>
              <FontAwesome5 name="temperature-low" color={"white"} size={25} />
              <Text style={styles.dataText}>{sensorData && sensorData.temperature} ℃</Text>
            </View>
            <View display="flex" flexDirection="row" style={{justifyContent: 'space-between'}}>
              <Ionicons name="water-outline" color={"white"} size={25} />
              <Text style={styles.dataText}  >{sensorData && sensorData.humidity} %</Text>
            </View>
            <View display="flex" flexDirection="row" style={{justifyContent: 'space-between'}}>
              <MaterialIcons name="wb-sunny" color={"white"} size={25} />
              <Text style={styles.dataText}  >{sensorData && sensorData.light} %</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.wrap}>
        <TouchableOpacity onPress={onLivingRoom} style={[styles.room_container, styles.shadow_outline]}>
          <MaterialCommunityIcons name="sofa-single-outline" color="#00d1ff" size={90} />
          <Text style={styles.room_name}>
            Living Room
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.room_container, styles.shadow_outline]}>

          <MaterialIcons name="kitchen" color={"#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Kitchen
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
        </TouchableOpacity>

      </View>
      <View style={styles.wrap}>
        <TouchableOpacity onPress={handlePress} style={[{ backgroundColor: "white" }, styles.room_container, styles.shadow_outline]}>

          <MaterialCommunityIcons name="bathtub-outline" color={"#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Bathroom
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress} style={[styles.room_container, styles.shadow_outline]}>

          <MaterialCommunityIcons name="bed-double-outline" color={"#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Bedroom
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
        </TouchableOpacity>

      </View>
      
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: "#fff",


  },
  backgroundImage: {
    flex: 3,
    width: '100%',
    resizeMode: 'cover', 
    justifyContent: 'center', 
    height: '100%',
  },
  wrap: {
    // flex: 10,
    display: 'flex',
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "25%"
  },
  room_container: {
    backgroundColor: HomeScreen.active ? "#00D1FF" : "white",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
    width: "40%",
    borderRadius: 20
  },
  shadow_outline: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3
    },
    evelation: 3
  },

  baseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
    paddingLeft: "5%",
    textAlign: 'center'
  },
  innerText: {
    color: 'red',
  },
  timeText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50
  },
  dateText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  dataText: {
    // fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  address: {
    color: 'white',
    fontStyle: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 6,
  },
  room_name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  number_devices: {
    color: 'grey',
    fontSize: 10,
  },

  overview: {
    backgroundColor: "#2A2A37",
    display: "flex",
    flexDirection: "column",
    height: "25%",
    width: "95%",
    borderRadius: 20,
    marginTop: 5
  },
  overviewContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  overviewItemLeft: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "50%"
  },
  overviewItemRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%"
  }
});
export default HomeScreen;
