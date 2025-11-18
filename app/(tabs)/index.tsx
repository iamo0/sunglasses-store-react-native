import { FlatList, StyleSheet, View, Pressable } from 'react-native';
import { useContext } from 'react';
import ProductsContext from '@/app/types/product';
import { ProductCard } from '@/components/ProductCard';
import { Text } from '@/components/ui/text';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import Svg, { Path } from 'react-native-svg';

const PromoImage = require('@/assets/images/image.png');

export default function Index() {
  const products = useContext(ProductsContext);

  const renderHeader = () => (
    <View style={styles.headerSection}>
      <View style={styles.headerTop}>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Sunglasses Store</Text>
        </View>
        <Pressable 
          style={styles.filterButton}
          onPress={() => router.navigate('/filters')}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M3 6H21M5 12H19M8 18H16"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Pressable>
      </View>

      <View style={styles.bannerContainer}>
        <Image 
          source={PromoImage} 
          style={styles.bannerImage}
          placeholder="PLACEHOLDER"
        />
      </View>

      <View style={styles.exclusiveOfferSection}>
        <View style={styles.offerBadge}>
          <Text style={styles.offerText}>✨ EXCLUSIVE OFFER</Text>
        </View>
        <Text style={styles.offerDescription}>Get up to 30% off on selected items</Text>
      </View>

      <Text style={styles.productsTitle}>Featured Products</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  headerSection: {
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  titleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  filterButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  exclusiveOfferSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  offerBadge: {
    backgroundColor: '#FFF3CD',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  offerText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
    letterSpacing: 0.5,
  },
  offerDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingVertical: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
