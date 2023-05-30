import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//import Apostila_03 from './components/apostila_03';
//import Apostila03A from './components/apostila_03_avancado';
import Apostila04 from './components/apostila_004';


export default function App() {
  return (
    <View style={styles.container}>
      <Apostila04 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#9E9E9E',
    padding: 8,
  },
});
