import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { CategoryType } from '@/types/type'
import { Colors } from '@/constants/Colors'

type Props = {
  Categories: CategoryType[]
}

const Categories = ({ Categories }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  titleWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 10,
    marginHorizontal: 20,
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
  categoryItem: {
    paddingVertical: 10,
    gap: 5,
    marginLeft: 20,
    alignItems: 'center',
    borderBottomColor: Colors.gray,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primary,
    // letterSpacing: 0.6,
  },
})
