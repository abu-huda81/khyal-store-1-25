import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductType } from '@/types/type'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import ProductItem from './ProductItem'

type Props = {
  products: ProductType[]
}

const FlashSale = ({ products }: Props) => {
  const saleEndDate = new Date()
  //   saleEndDate.setFullYear(2024, 12, 15);
  saleEndDate.setDate(saleEndDate.getDate() + 2)
  saleEndDate.setHours(23, 59, 59)
  const [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeUnits = (timeDifference: number) => {
      const seconds = Math.floor(timeDifference / 1000)
      setTimeUnits({
        days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
        hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor((seconds % (60 * 60)) / 60),
        seconds: seconds % 60,
      })
    }
    const updateCountdown = () => {
      const currentDate = new Date().getTime()
      const expiryTime = saleEndDate.getTime()
      const timeDifference = expiryTime - currentDate

      if (timeDifference <= 0) {
        calculateTimeUnits(0)
      } else {
        calculateTimeUnits(timeDifference)
      }
    }
    updateCountdown()
    const intervalId = setInterval(updateCountdown, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const formateTime = (time: number) => {
    return time.toString().padStart(2, '0')
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <View style={styles.timerWrapper}>
          <Text style={styles.title}>Flash Sale</Text>
          <View style={styles.timer}>
            <Ionicons name='timer-outline' size={16} color={Colors.black} />
            <Text style={styles.timerText}>{`${formateTime(
              timeUnits.days
            )}:${formateTime(timeUnits.hours)}:${formateTime(
              timeUnits.minutes
            )}:${formateTime(timeUnits.seconds)}`}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20, paddingRight: 20 }}>
            <ProductItem item={item} index={index} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 20 }}
      />
    </View>
  )
}

export default FlashSale

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  timerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    letterSpacing: 0.6,
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: Colors.highlight,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 12,
  },
  timerText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    letterSpacing: 0.6,
  },
})
