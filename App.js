import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ToastAndroid ,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Undertrials Project</Text>
      <StatusBar style="auto" />
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

  text: {
    color:"#304ffe",
    fontSize: 20,
    padding: 20
  },

  button: {
    borderRadius: 10,
    backgroundColor:"#29b0f0",
    width:150,
    height:150,
    justifyContent:'center',
    alignItems:"center"
  }
}
);
