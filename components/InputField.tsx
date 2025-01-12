import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type Props = {}

const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return <TextInput style={styles.inputField} {...props} />
}

export default InputField

const styles = StyleSheet.create({
  inputField: {
    // width: '80%',
    height: 50,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignSelf: 'stretch',
    marginBottom: 20,
    fontSize: 16,
    color: Colors.black,
  },
})
