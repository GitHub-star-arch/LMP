import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
export default class CustomSideBarMenu extends Component {
    render() {
        return (
            <View>
                <DrawerItems {...this.props}>

                </DrawerItems>
            </View>
        )
    }
}