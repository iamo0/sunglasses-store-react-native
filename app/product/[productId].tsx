import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [isAddedToCart, setAddedToCart] = useState(false);
  const { productId } = useLocalSearchParams();

  return <View style={styles.container}>
    <Text style={styles.text}>This is a page of product {productId}</Text>
    {isAddedToCart
      ? <View style={styles.buttonsContainer}>
          <Button title="Remove from cart" onPress={() => setAddedToCart(false)}></Button>
          <Button title="Go to cart" onPress={() => router.navigate("/(tabs)/cart")} />
        </View>
      : <Button title="Add to the cart" onPress={() => setAddedToCart(true)} />
    }
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: "#000",
    flex: 1,
    gap: 12,
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
