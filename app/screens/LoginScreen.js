/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/23/21, 10:38 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Button} from 'react-native';
import * as Yup from 'yup';
import * as Google from "expo-google-app-auth";

import {AppForm, AppFormField, AppSubmitButton, ErrorMessage} from '../components/forms';
import AppScreen from '../components/AppScreen';
import AuthContext from "../auth/context";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string()
        .required()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .label('Password')
});

export default function LoginScreen() {
    const authContext = useContext(AuthContext);
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = ({email, password}) => {
        //Call API
        const loginSuccess = true;
        if (!loginSuccess) return setLoginFailed(true);
        setLoginFailed(false);
        authContext.setUser({name:"Tanushka Bandara", email: "tanushkabandara@gmail.com", password: "123"});
    }

    const signInAsync = async () => {
        try {
            const { type, user } = await Google.logInAsync({
                //TODO: Use .env
                iosClientId: `487282100127-e7af8pn3acrvt8cuq3rddioh3i7tadlh.apps.googleusercontent.com`,
                androidClientId: `487282100127-uptlq9n18trp9tv42a5v8o1vei5li9e8.apps.googleusercontent.com`,
            });

            if (type === "success") {
                console.log("success, navigating to profile" + JSON.stringify(user));
                authContext.setUser(user);
            }
        } catch (error) {
            console.error("LoginScreen error with login", error);
        }
    };

    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>

            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder='Email'
                    textContentType='emailAddress'
                    clearButtonMode='always'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                    clearButtonMode='always'
                />
                <AppSubmitButton title='Login'/>
            </AppForm>
            <AppButton color='blue' title='Login with Google' onPress={signInAsync} />
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        alignSelf: 'center',
        height: 80,
        marginBottom: 20,
        marginTop: 50,
        width: 80,
    }
})
