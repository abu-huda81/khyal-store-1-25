import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Href, Link } from 'expo-router'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Colors } from '@/constants/Colors'

type Props = {
  emailHref: Href
}

const SocialLoginButtons = (props: Props) => {
  const { emailHref } = props
  return (
    <View style={styles.socialLoginWrapper}>
      <Animated.View entering={FadeInDown.delay(500).duration(500)}>
        <Link href={emailHref} asChild>
          <TouchableOpacity style={styles.btn}>
            <Ionicons name='mail-outline' size={22} color={Colors.primary} />
            <Text style={styles.btnText}>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(700).duration(500)}>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name='logo-google' size={22} color={Colors.primary} />
          <Text style={styles.btnText}>Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(900).duration(500)}>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name='logo-apple' size={22} color={Colors.primary} />
          <Text style={styles.btnText}>Continue with Apple</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default SocialLoginButtons

const styles = StyleSheet.create({
  socialLoginWrapper: {
    alignSelf: 'stretch',
  },
  btn: {
    flexDirection: 'row',
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 25,
    marginBottom: 15,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Colors.black,
  },
})
