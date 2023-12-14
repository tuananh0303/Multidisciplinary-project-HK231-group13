import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      navigation.navigate('Home');
    } else {
      alert('Đăng nhập thất bại');
    }
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

        <Text style={{ fontSize: 25, marginBottom: 20,textAlign: 'center' }}>Login here</Text>
    
        <TextInput
            style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#000', borderRadius: 5 }}
            placeholder="adc@gmail.com"
            value={username}
            onChangeText={(text) => setUsername(text)}
        />
        <TextInput
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#000', borderRadius: 5 }}
        placeholder="********"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        />
        <Button styles={{ borderRadius: 5}} title="Login" onPress={handleLogin} />
    </View>
  </View>
  );
};

export default LoginScreen;
