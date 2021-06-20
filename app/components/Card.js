/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/19/21, 1:18 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

export default function Card({subTitle, title, image, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image}/>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 25,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 5
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 5
    }

})
