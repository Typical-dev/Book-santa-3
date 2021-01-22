import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import firebase from 'firebase'
import db from '../components/config'
import MyHeader from '../components/myHeader'

export default class DonateScreen extends Component{
    constructor() {
        super();
        this.state = {
            requestBookList: [],
        }
        this.requestRef = null
    }

    getRequestedBookList = () => {
        this.requestRef = db.collection("request").onSnapshot((snapShot) => {
            var requestedBookList = snapShot.docs.map((document) => document.data())
            this.setState({
                requestBookList: requestedBookList,
            })
        })

    } 
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => {
        return (
            <ListItem key = {i} title = {item.bookname} subTitle = {item.reason} titleStyle = {{color:"black", fontWeight: "bold"}} rightElement = {
                <TouchableOpacity style = {styles.button}>
                    <Text style={{ color: "#FFFF" }}>
                        View
                    </Text>
            </TouchableOpacity>
            }>

            </ListItem>
        )
    }
    render() {
        return (
            <View>
                <Text>
                    Book Donate Screen
                </Text>
            </View>
        )
    }
}