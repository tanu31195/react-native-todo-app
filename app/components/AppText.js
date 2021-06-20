/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 2/26/21, 1:53 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

export default function AppText({ children, style, ...otherProps }) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
    )
}
