import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import InputField from '@/components/InputField'
import SocialLoginButtons from '@/components/SocialLoginButtons'

type Props = {}

const SignUpScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        name='signup'
        options={{
          title: 'Sign Up',
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name='close' size={24} color='black' />
              </TouchableOpacity>
            )
          },
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Create An Account</Text>
        <InputField
          placeholder='Email Address'
          keyboardType='email-address'
          autoCapitalize='none'
          placeholderTextColor={Colors.gray}
        />
        <InputField
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor={Colors.gray}
        />
        <InputField
          placeholder='Confirm Password'
          secureTextEntry={true}
          placeholderTextColor={Colors.gray}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Already have an account?{'  '}
          <Link href={'/signin'} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTextSpan}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </Text>
        <View style={styles.divider} />
        <SocialLoginButtons emailHref={'/signin'} />
      </View>
    </>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: Colors.primary,
    letterSpacing: 1.2,
  },
  button: {
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginBottom: 30,
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
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    marginBottom: 30,
    width: '30%',
  },
})
