/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/19/21, 12:51 PM
 * Copyright (c) 2021. All rights reserved.
 */

import { DefaultTheme} from "@react-navigation/native";
import colors from "../config/colors";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white
    }
};
