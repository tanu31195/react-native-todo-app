/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/23/21, 6:07 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import { AppForm, AppFormField, AppFormPicker, AppSubmitButton } from '../components/forms';
import {addTask, updateTask ,toggleDone} from "../store/actions/tasks";
import {useDispatch, useSelector} from "react-redux";

const validationSchema = Yup.object().shape({
    // title: Yup.string().required().min(1).label('Title'),
    // price: Yup.number().required().min(1).max(10000).label('Price'),
    // description: Yup.string().label('Description'),
    // category: Yup.object().required().nullable().label('Category'),
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
    const dispatch = useDispatch();

    const editTask = route.params;
    console.log('TaskEditScreen.js 61' + JSON.stringify(editTask));
    const editedTask = useSelector(state => state.tasks.tasks.find(task => task.id === editTask?.id))
    // const initialTasks = useSelector(state => state.tasks.tasks);
    // const [tasks, setTasks] = useState(initialTasks);

    const [task, setTask] = useState(editTask ? editTask.task : '');
    const [dueDate, setDueDate] = useState(editTask ? editTask.dueDate : '');
    const [assignee, setAssignee] = useState(editTask ? editTask.assignee : '');
    const [done, setDone] = useState( false);

    const handleSubmit = () => {
        if (editTask) {
            dispatch(updateTask(editTask.id, task, dueDate, assignee));
        } else {
            dispatch(addTask(task, dueDate, assignee,done));
            setTask('');
            setAssignee('');
            setDueDate('');
        }
    }
    return (
        <AppScreen style={styles.container}>
            <AppForm
                initialValues={{ task: '', dueDate: '', assignee: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={100}
                    name='task'
                    placeholder='Task'
                    onChangeText={text => setTask(text)}
                    value={task}
                />
                <AppFormField
                    // items={assignees}
                    name='assignee'
                    // PickerItemComponent={CategoryPickerItem}
                    placeholder='Select Assignee'
                    width='100%'
                    onChangeText={text => setAssignee(text)}
                    value={assignee}
                />
                <AppFormField
                    maxLength={10}
                    name='dueDate'
                    numberOfLines={1}
                    placeholder='Due Date'
                    onChangeText={text => setDueDate(text)}
                    value={dueDate}
                />
                <AppSubmitButton title={editTask ? 'Update Task' : 'Add Task'} />
            </AppForm>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
