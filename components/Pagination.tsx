import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type Props = {
  items: string[]
  paginationIndex: number
}

const Pagination = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.items.map((item, index) => (
        <View
          key={index}
          style={{
            ...styles.paginationDot,
            backgroundColor: index === props.paginationIndex ? Colors.primary : 'gray',
          }}
        />
      ))}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  paginationDot: {
    width: 30,
    height: 4,
    borderRadius: 5,
    marginHorizontal: 3,
  },
})
