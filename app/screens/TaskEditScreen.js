/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/21/21, 6:47 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import { AppForm, AppFormField, AppFormPicker, AppSubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
});

const assignees = [
    {
        backgroundColor: '#fc5c65',
        icon: 'floor-lamp',
        label: 'Dev',
        value: 1,
      },
      {
        backgroundColor: '#fd9644',
        icon: 'car',
        label: 'QA',
        value: 2,
      },
      {
        backgroundColor: '#fed330',
        icon: 'camera',
        label: 'Support',
        value: 3,
      },
      {
        backgroundColor: '#26de81',
        icon: 'cards',
        label: 'HR',
        value: 4,
      },
      {
        backgroundColor: '#2bcbba',
        icon: 'shoe-heel',
        label: 'Finance',
        value: 5,
      }
];

export default function TaskEditScreen({route}) {
    console.log(route);
    const task = route.params;
    return (
        <AppScreen style={styles.container}>
            <AppForm
                initialValues={{ task: '', dueDate: '', assignee: null }}
                onSubmit={values => !task ? console.log('New') : console.log('Update')}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={100}
                    name='task'
                    placeholder='Task'
                    value={!task ? '':task.title}
                />
                <AppFormPicker
                    items={assignees}
                    name='assignee'
                    // PickerItemComponent={CategoryPickerItem}
                    placeholder='Select Assignee'
                    width='100%'
                />
                <AppFormField
                    maxLength={10}
                    name='dueDate'
                    numberOfLines={1}
                    placeholder='Due Date'
                    value={!task ? '':task.description}
                />
                <AppSubmitButton title={!task ? 'Add Task': 'Update Task'} />
            </AppForm>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
