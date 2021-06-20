/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 2/25/21, 7:14 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../config/colors';

export default function ListItemSeparator() {
    return (
        <View style={styles.separator}/>
    )
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.light
    }
})
