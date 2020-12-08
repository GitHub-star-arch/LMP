import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SettingScreen from '../Screens/SettingsScreen'
import { AppTabNavigator } from './AppTabNavigator.js'
import CustomSideBarMenu from './CustomSideBarMenu'
import { createDrawerNavigator } from 'react-navigation-drawer'
export const AppDrawerNavigator = createDrawerNavigator(
    { Home: { screen: AppTabNavigator }, Settings: { screen: SettingScreen } },
    { contentComponent: CustomSideBarMenu },
    { initalRoutename: 'Home' }
)