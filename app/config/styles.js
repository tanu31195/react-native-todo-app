/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 2/18/21, 11:30 PM
 * Copyright (c) 2021. All rights reserved.
 */

import { Platform } from 'react-native';

import colors from './colors';

export default {
    colors, //equal to colors:colors,
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    }
}
