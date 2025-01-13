import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {}

const Header = (props: Props) => {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Text style={styles.logo}>KHYAL</Text>
      {/* <Image source={require("@/assets/images/logo3.png")} style={styles.logo} /> */}

      <Link href='/explore' asChild>
        <TouchableOpacity style={styles.searchBar}>
          <Text style={styles.searchText}>search</Text>
          <Ionicons name='search-outline' size={22} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: Colors.white,
    gap: 15,
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  searchText: {
    color: Colors.gray,
    fontSize: 16,
  },
})
