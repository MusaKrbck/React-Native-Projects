import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.musastil}>!Top Level!</Text>
      <View style={styles.container}>
        <Text style={styles.musastil}>TAM ORTA</Text>
        <Button title='BUTONA BAS' color={'black'} ></Button>
        <Text>Change</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  musastil: {
    margin: 16,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius:20,
    padding: 15
  }
});
