/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 1:25 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import TasksScreen from "../screens/TasksScreen";

const Stack = createStackNavigator();

const TaskNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Account"} options={{title: "Account"}} component={AccountScreen}/>
            <Stack.Screen name={"Tasks"} options={{title: "Tasks"}} component={TasksScreen}/>
        </Stack.Navigator>
    );
}

export default TaskNavigator;
