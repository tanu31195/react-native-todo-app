/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 1:27 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import TaskEditScreen from "../screens/TaskEditScreen";
import TasksScreen from "../screens/TasksScreen";

const Stack = createStackNavigator();

const TaskNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Tasks"} options={{title: "Tasks"}} component={TasksScreen}/>
            <Stack.Screen name={"TaskEditScreen"} options={{title: "Edit Task"}} component={TaskEditScreen}/>
        </Stack.Navigator>
    );
}

export default TaskNavigator;
