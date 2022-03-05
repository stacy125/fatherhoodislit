import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Help = () => {
  return (
    <View>
      <Text style={styles.title}>Help</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        color: 'red'
    }
})

export default Help
