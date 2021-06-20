/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 1:58 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TaskEditScreen from "../screens/TaskEditScreen";
import TaskNavigator from "./TaskNavigator";
import AccountNavigator from "./AccountNavigator";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import NewTaskButton from "./NewTaskButton";
import routes from "./routes";
import DoneTasksButton from "./DoneTasksButton";
import DoneTasksScreen from "../screens/DoneTasksScreen";
import DoneTasksNavigator from "./DoneTasksNavigator";


const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                component={TaskNavigator}
                name={"Tasks"}
                options={{
                    title: "Tasks",
                    tabBarIcon: ({color,size}) =>
                        <MaterialCommunityIcons name="format-list-bulleted-square" color={color} size={size}/>
                }}
            />
            <Tab.Screen
                component={DoneTasksNavigator}
                name={"DoneTasks"}
                options={({navigation}) => ({
                    title: "Done Tasks",
                    tabBarButton: () => <DoneTasksButton onPress={() => navigation.navigate(routes.DONE_TASKS)}/>
                })}
            />
            <Tab.Screen
                component={TaskEditScreen}
                name={"TaskEditScreen"}
                options={({navigation}) => ({
                    title: "Add Task",
                    tabBarButton: () => <NewTaskButton onPress={() => navigation.navigate(routes.TASK_EDIT)}/>
                })}
            />
            <Tab.Screen
                component={AccountNavigator}
                name={"Account"}
                options={{
                    title: "Account",
                    tabBarIcon: ({color,size}) =>
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                }}
            />
        </Tab.Navigator>
    );
}

export default AppNavigator;
