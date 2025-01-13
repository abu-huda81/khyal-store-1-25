import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import { ProductType } from '@/types/type'
import ImageSlider from '@/components/ImageSlider'

type Props = {}

const ProductDetails = (props: Props) => {
  const { id } = useLocalSearchParams()
  const localhost = '192.168.1.6'
  const [product, setProduct] = useState<ProductType>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    images: [],
    category: {
      id: 0,
      name: '',
      image: '',
    },
  })

  useEffect(() => {
    getProductDetails()
  }, [])

  const getProductDetails = async () => {
    const URL = `http://${localhost}:8000/products/${id}`
    const response = await axios.get(URL)
    console.log('ProductDetails: ', response.data)
    setProduct(response.data)
  }
  return (
    <View>
      {product && <ImageSlider imageList={product.images} />}
      {product && <Text>{product.title}</Text>}
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})
