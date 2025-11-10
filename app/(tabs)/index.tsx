import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Button, StyleSheet, View } from 'react-native';

const PlaceholderImage = require('@/assets/images/image.png');

export default function Index() {
  return <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Button onPress={() => router.navigate("/filters")} title="Filters" />
      <Button onPress={() => router.navigate("/product/123")} title="Go to product" />
    </View>
  </View>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    gap: 12,
  },
  image: {
    width: 383,
    height: 187,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
