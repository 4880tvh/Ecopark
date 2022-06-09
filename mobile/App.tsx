import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo-ecopark.jpg')}
        style={styles.logo}
      />
      <Button
        onPress={() => Alert.alert('Button pressed')}
        title="Get Started"
        color="#2196F3"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 225,
    height: 150,
    margin: 20,
  },
});
