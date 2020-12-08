import React, { useImperativeHandle } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import db from '../config.js'
import firebase from 'firebase'

export default class StalkingScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            Details: this.props.navigation.getParam("details"),
            BookName: this.props.navigation.getParam("details")["BookName"],
            Reason: this.props.navigation.getParam("details")["Reason"],
            userName: this.props.navigation.getParam("details")["userName"],
            UniqueID: this.props.navigation.getParam("details")["UniqueID"],
            email: this.props.navigation.getParam("details")["UserId"],
            ReciverContact: '',
            ReciverName: '',
            ReciverID: '',
        }
    }

    componentDidMount() {
        this.getUserDetails()
    }

    getUserDetails = () => {
        db.collection('users').where(
            'email', '==', this.state.email
        ).get().then(Snapshot => {
            Snapshot.forEach(doc => {
                this.setState({
                    ReciverContact: doc.data().contact,
                    ReciverName: doc.data().firstname,
                    ReciverID: doc.data().email,
                })
            })
        })

    }

    render() {
        return (
            <View>
                <Text>
                    Reciver Details
                </Text>
                <Card>
                    <Text>
                        BookName:{this.state.BookName}
                        <br />
                        Reason:{this.state.Reason}
                    </Text>
                    <br />
                    <Card>
                        <Text>
                            Reciver Details:
                            <br />
                        </Text>
                        <Text>
                            Name: {this.state.ReciverName}
                            <br />
                            Contact: {this.state.ReciverContact}
                            <br />
                            UniqueID: {this.state.UniqueID}
                        </Text>
                        {this.state.email !== this.state.ReciverID ? null : (
                            <TouchableOpacity>
                                <Text>
                                    I wanna Donate
                            </Text>
                            </TouchableOpacity>)}
                    </Card>
                </Card>
            </View>
        )
    }
}