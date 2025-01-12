import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { icon } from '@/constants/Icons'
import { Colors } from '@/constants/Colors'

type Props = {
  isFocused: boolean;
  onPress: Function | any;
  onLongPress: Function | any;
  label:
    | string
    | ((props: {
        focused: boolean;
        color: string;
        position: any;
        children: any;
      }) => ReactNode);
  routeName: string;
};

const TabBarButton = (props: Props) => {
  const { isFocused, onPress, onLongPress, label, routeName } = props
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarBtn}
    >
      {routeName == 'cart' && (
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      )}
      {icon[routeName as keyof typeof icon]({
        color: isFocused ? Colors.primary : Colors.black,
      })}
      <Text style={{ color: isFocused ? Colors.primary : Colors.black }}>
        {typeof label === 'function' 
          ? label({ 
              focused: isFocused, 
              color: isFocused ? Colors.primary : Colors.black, 
              position: null, 
              children: null 
            }) 
          : label}
      </Text>
    </Pressable>
  )
}

export default TabBarButton

const styles = StyleSheet.create({
  tabBarBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  badgeWrapper: {
    position: 'absolute',
    top: -5,
    right: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    zIndex: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
  },
})
