/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 12:36 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React, {useContext, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, AppSubmitButton, ErrorMessage} from '../components/forms';
import AppScreen from '../components/AppScreen';
import AuthContext from "../auth/context";

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
        authContext.setUser({name:"test", email: "test@tes", password: "123"});
    }

    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>

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
