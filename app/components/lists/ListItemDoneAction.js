/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/23/21, 7:09 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ListItemDoneAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='check-bold'
                    size={35}
                    color={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        width: 70,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
