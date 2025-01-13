import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { ProductType } from '@/types/type'
import ProductItem from '@/components/ProductItem'

type Props = {
  products: ProductType[]
  flatList: boolean
}

const ProductList = ({ products, flatList = true }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <Text style={styles.title}>For You</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      {flatList ? (
        <FlatList
          data={products}
          renderItem={({ item, index }) => (
            <ProductItem item={item} index={index} />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columStyle}
        />
      ) : (
        <View style={styles.itemWrapper}>
          {products.map((item, index) => (
            <View key={index} style={styles.productWrapper}>
              <ProductItem item={item} index={index} key={item.id} />
            </View>
          ))}
        </View>
      )}
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  titleWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    letterSpacing: 0.6,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    letterSpacing: 0.6,
  },
  columStyle: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productWrapper: {
    width: '49%',
    marginBottom: 20,
  },
})
