/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 2/26/21, 12:49 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    name: Yup.string()
        .required()
        .max(40)
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .label('Name'),
    password: Yup.string()
        .required()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .label('Password')
});

export default function RegisterScreen() {
    return (
        <AppScreen style={styles.container}>
            <AppForm
                initialValues={{ email: '', password: '', name: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='words'
                    autoCorrect={false}
                    icon='account'
                    name='name'
                    placeholder='Name'
                    textContentType='name'
                    clearButtonMode='always'
                />
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
                <AppSubmitButton title='Register' />
            </AppForm>

        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
})
