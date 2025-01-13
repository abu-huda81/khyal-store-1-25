import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductType, CategoryType } from '@/types/type'
import { Stack } from 'expo-router'

import Header from '@/components/Header'
import ProductList from '@/components/ProductList'
import Categories from '@/components/Categories'
import FlashSale from '@/components/FlashSale'

type Props = {}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = React.useState<ProductType[]>([])
  const [CategoryList, setCategoryList] = useState<CategoryType[]>([])
  const [saleProductList, setSaleProductList] = useState<ProductType[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  useEffect(() => {
    getProducts()
    getCategories()
    getSaleProducts()
  }, [])
  const localhost = '192.168.1.6'
  const getProducts = async () => {
    const URL = `http://${localhost}:8000/products`
    const response = await axios.get(URL)
    console.log(response.data)
    setProducts(response.data)
    setIsLoading(false)
  }

  const getCategories = async () => {
    const URL = `http://${localhost}:8000/categories`
    const response = await axios.get(URL)
    console.log(response.data)
    setCategoryList(response.data)
    setIsLoading(false)
  }
  const getSaleProducts = async () => {
    const URL = `http://${localhost}:8000/saleProducts`
    const response = await axios.get(URL)
    console.log(response.data)
    setSaleProductList(response.data)
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='orange' />
      </View>
    )
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <ScrollView>
        <Categories Categories={CategoryList} />
        <FlashSale products={saleProductList} />
        <View style={styles.bannerImageContainer}>
          <Image
            source={require('@/assets/images/sale-banner.jpg')}
            style={styles.bannerImage}
          />
        </View>
        <ProductList products={products} flatList={false} />
      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImageContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
})
