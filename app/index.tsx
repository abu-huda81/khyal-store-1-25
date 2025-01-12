import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import Animated, {  FadeInRight } from 'react-native-reanimated'
import SocialLoginButtons from '@/components/SocialLoginButtons'

type Props = {}

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <ImageBackground
        source={require('../assets/images/ecommerce-splash.jpeg')}
        resizeMode='cover'
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <LinearGradient
            colors={[
              'transparent',
              'rgba(255, 255, 255, 0.9)',
              'rgba(255, 255, 255, 1)',
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Animated.Text
                style={styles.title}
                entering={FadeInRight.delay(300).duration(300).springify()}
              >
                KHYAL STORE
              </Animated.Text>
              <Animated.Text
                style={styles.description}
                entering={FadeInRight.delay(500).duration(300).springify()}
              >
                One Stop Solution for all your needs
              </Animated.Text>
              <SocialLoginButtons emailHref={'/signup'} />
              <Text style={styles.loginText}>
                Already have an account?{'  '}
                <Link href={'/signin'} asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTextSpan}>Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.primary,
    letterSpacing: 2.4,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: Colors.primary,
    letterSpacing: 1.2,
    lineHeight: 30,
  },
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
  loginText: {
    marginTop: 30,
    fontSize: 14,
    color: Colors.primary,
    lineHeight: 24,
    textAlign: 'center',
  },
  loginTextSpan: {
    color: Colors.black,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginTop: -10,
    marginBottom: -3,
  },
})
