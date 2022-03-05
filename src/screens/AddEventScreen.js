import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddEvent = () => {
  return (
    <View>
      <Text>Add Event</Text>
      <Text>Name of the Event:</Text>
      <Image>Event photo</Image>
      <Text> Details of the Event:</Text>
      <Text>Location:</Text>
      <Text>Price</Text>
      <Text>Comment or tips</Text>
    </View>
  )
}
// add ability to upload an Event

const styles = StyleSheet.create({})

export default AddEvent
