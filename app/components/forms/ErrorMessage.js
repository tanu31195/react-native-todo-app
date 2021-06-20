/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 2/25/21, 4:37 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText'

export default function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;
    return (
        <AppText style={styles.error}>{error}</AppText>
    )
}

const styles = StyleSheet.create({
    error: {
        color: colors.danger,
        fontSize: 15
    }
})
