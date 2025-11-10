import { Button, StyleSheet, Text, View } from 'react-native';

export default function Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a filters page</Text>
      <Button title="Apply filters" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#25292e',
    flex: 1,
    gap: 12,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
