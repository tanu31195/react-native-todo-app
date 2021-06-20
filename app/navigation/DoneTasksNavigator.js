/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 1:59 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import TaskEditScreen from "../screens/TaskEditScreen";
import TasksScreen from "../screens/TasksScreen";
import DoneTasksScreen from "../screens/DoneTasksScreen";

const Stack = createStackNavigator();

const DoneTasksNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"DoneTasks"} options={{title: "Done Tasks"}} component={DoneTasksScreen}/>
            <Stack.Screen name={"TaskEditScreen"} options={{title: "Edit Task"}} component={TaskEditScreen}/>
        </Stack.Navigator>
    );
}

export default DoneTasksNavigator;
