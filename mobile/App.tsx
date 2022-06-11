import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/views/Loading/Loading';
import Welcome from './src/views/Welcome/Welcome';
import { useFonts } from 'expo-font';
import RootStack from './src/navigators/RootStack';
import Home from './src/views/Home/Home';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      {/* <Welcome /> */}
      <RootStack />
      {/* <Home /> */}
    </SafeAreaView>
    </SafeAreaProvider>
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
