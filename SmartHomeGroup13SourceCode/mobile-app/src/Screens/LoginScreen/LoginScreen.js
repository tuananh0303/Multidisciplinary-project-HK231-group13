import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      navigation.navigate('Home');
    } else {
      alert('Đăng nhập thất bại');
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
    <View style={{ alignItems: 'center', backgroundColor: '#98c0ed', padding: 5, borderRadius: 5 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>Wellcome Back</Text>
        
      <Image 
        style={{ width: 200, height: 200, resizeMode: 'cover', marginBottom: 20 }}
        source={require('../../../assets/img/smart-home-logo-free-vector.jpg')}
      />
      
    </View>
    <View style={{ backgroundColor: '#fff',padding: 15,  }}>

        <Text style={{ fontSize: 25, marginBottom: 20,textAlign: 'center', fontWeight: 'bold' }}>Login here</Text>
    
        <TextInput
            style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#000', borderRadius: 5 }}
            placeholder="abc@gmail.com"
            value={username}
            onChangeText={(text) => setUsername(text)}
        />
        <View  style={styles.password}>
            <TextInput style={styles.input}
            
            placeholder="********"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
        </View>
        
        <Button styles={{ borderRadius: 5}} title="Login" onPress={handleLogin} />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  password: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    paddingVertical: 10,
    borderWidth: 1, 
    borderColor: '#000', 
    borderRadius: 5,
    padding: 10, 
    marginBottom: 10, 

  },
  input: {
    flex: 1,
  },
});

export default LoginScreen;
