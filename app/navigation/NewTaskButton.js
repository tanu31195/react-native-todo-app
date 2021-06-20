/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/19/21, 3:23 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function NewTaskButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="playlist-plus" color={colors.white} size={30}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 40,
        bottom: 20,
        height: 80,
        justifyContent: 'center',
        width: 80
    }
})

export default NewTaskButton;
