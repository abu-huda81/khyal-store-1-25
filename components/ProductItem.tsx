import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { ProductType } from '@/types/type'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated'
import { Link } from 'expo-router'

type Props = {
  item: ProductType
  index: number
}
const width = Dimensions.get('window').width - 40

const ProductItem = ({ item, index }: Props) => {
  return (
    <Link href={`/product-details/${item.id.toString()}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.container}
          entering={FadeInDown.delay(300 + index * 100)
            .duration(500)
            .springify()}
        >
          <Image src={item.images[0]} style={styles.productImage} />
          <TouchableOpacity style={styles.bookmark}>
            <Ionicons name='heart-outline' size={22} color={Colors.black} />
          </TouchableOpacity>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.ratingWrapper}>
              <Ionicons name='star' size={16} color='#D4AF37' />
              <Text style={styles.rating}>4.7</Text>
            </View>
          </View>
          <Text style={styles.productTitle}>{item.title}</Text>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  )
}

export default ProductItem
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: width / 2 - 10,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookmark: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 5,
    backgroundColor: Colors.highlight,
    borderRadius: 30,
    elevation: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.gray,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    letterSpacing: 1.1,
  },
})
