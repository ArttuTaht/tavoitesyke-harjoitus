import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age,setAge] = useState('');
  const [limits,setLimits] = useState(0);

  // This function calculates maximum lower and upper heartrates based on inputted age
  function calculate() {
    const result = ((220 - Number(age)) * 0.65) + "-" + ((220 - Number(age)) * 0.85).toFixed(0);
    setLimits(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)} keyboardType='decimal-pad'/>
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  }
});