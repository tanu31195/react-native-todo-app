/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 1:24 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function DoneTasksButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="check-box-multiple-outline" color={colors.white} size={30}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.green,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 40,
        bottom: 20,
        height: 80,
        justifyContent: 'center',
        width: 80
    }
})

export default DoneTasksButton;
