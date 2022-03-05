import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'
import { Button, Image } from 'react-native-web'

const Event = () => {
    return (
        <View>
            <Text>Local Event</Text>
            <Button>share</Button>
            <Image>Event Image</Image>
            <Button>Add to my Events</Button>
            <Text>Event Name: </Text>
            <Text>Location: </Text>
            <Text onPress={() => Linking.openURL('https://maps.google.com')}>Google Maps</Text>
            <Text>Date: </Text>
            <Text>Price: </Text>
            <Text>Ratings: </Text>
            <Text onPress={() => Linking.openURL('Event link')}>Google Maps</Text>
            <Text>Comment</Text>
            <Text>Comment</Text>
            <Text>Comment</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Event
