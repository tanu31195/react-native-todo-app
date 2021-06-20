/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 2/26/21, 6:20 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from './AppText'

import Icon from './Icon'

export default function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 15
    }
})
