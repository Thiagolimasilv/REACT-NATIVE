import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.aa}>Thiago Lima Silva</Text>
      <Text style={styles.abc}>Thiago Lima Silva reside em sumaré e sofre por futebol</Text>
       <Text style={styles.ultimo}>Thiago Lima Silva Armario 1 notebook 11</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  abc: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'top',
  },
  aa: {
    flex: 1,
    border: '1px solid red',
    backgroundColor: '#ff3',
    fontSize: '50px',
   
   
  },
  ultimo: {
    flex: 1,
    border: '1px solid red',
    backgroundColor: '#ff3',
    
    marginTop: '100px',
  },
  
  
});