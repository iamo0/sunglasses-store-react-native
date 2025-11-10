import ProductsContext, { defaultProducts } from "@/app/types/product";
import { Stack } from 'expo-router';

export default function RootLayout() {
  return <ProductsContext.Provider value={defaultProducts}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "Back", }} />
      <Stack.Screen name="filters/index" options={{ title: "Filters", }} />
      <Stack.Screen name="product/[productId]" options={{ title: "Product", }} />
      <Stack.Screen name="checkout/index" options={{ title: "Checkout", }} />
    </Stack>
  </ProductsContext.Provider>;
}
