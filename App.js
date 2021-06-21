/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 4:24 PM
 * Copyright (c) 2021. All rights reserved.
 */

import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, Platform, Button, View} from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppScreen from "./app/components/AppScreen";
import {ListItem} from "./app/components/lists";
import TaskEditScreen from "./app/screens/TaskEditScreen";
import DateTimePicker from '@react-native-community/datetimepicker';
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import tasksReducer from "./app/store/reducers/tasks";

const rootReducer = combineReducers({
    tasks: tasksReducer
});

const store = createStore(rootReducer);

export default function App() {
    const [user, setUser] = useState();
    const loggedIn = true;

    return (

        <AuthContext.Provider value={{user, setUser}}>
            <StatusBar style="dark"/>
            <Provider store={store}>
                <NavigationContainer theme={navigationTheme}>
                    {user ? <AppNavigator/> : <AuthNavigator/>}
                </NavigationContainer>
            </Provider>
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
