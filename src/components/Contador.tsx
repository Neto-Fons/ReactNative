import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Contador() {

  const [count, setCount] = useState<number>(0);

  const incrementar = () => {
    setCount(prevState => prevState + 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>CONTADOR: {count}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={incrementar}>
        <Text style={styles.textButton}>Incrementar</Text>
      </TouchableOpacity>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3F51B5',
    padding: 16,
    borderRadius: 12
  },
  textButton: {
    color: '#fff',
    fontSize: 20
  },
  text: {
    color: '#FF0000',
    fontSize: 26,
    marginBottom: 20
  }
});