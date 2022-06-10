import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './src/views/Loading/LoadingScreen';
import WelcomeScreen from './src/views/WelcomeScreen';
import { useFonts } from 'expo-font';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <WelcomeScreen />
      {/* <LoadingScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
