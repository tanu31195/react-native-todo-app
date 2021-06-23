/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/23/21, 7:22 PM
 * Copyright (c) 2021. All rights reserved.
 */

import {TOGGLE_DONE, ADD_TASK, UPDATE_TASK, SET_TASKS} from "../actions/tasks";

const initialTasks = [
    {
        id: 1,
        task: 'Complete components',
        dueDate: '19/06/2021',
        assignee: 'AA',
        image: require('../../assets/profile.png'),
        done: false
    },
    {
        id: 2,
        task: 'Complete screens',
        dueDate: '20/06/2021',
        assignee: 'AA',
        image: require('../../assets/profile.png'),
        done: false
    },
    {
        id: 3,
        task: 'Complete backend',
        dueDate: '22/06/2021',
        assignee: 'AA',
        image: require('../../assets/profile.png'),
        done: false
    },
    // {
    //     id: 4,
    //     title: 'UI Design',
    //     description: '17/06/2021',
    //     image: require('../../assets/profile.png'),
    //     done: true
    // },
    // {
    //     id: 5,
    //     title: 'DB',
    //     description: '18/06/2021',
    //     image: require('../../assets/profile.png'),
    //     done: true
    // }
]

const initialDoneTasks = [
    {
        id: 6,
        task: 'UI Design',
        dueDate: '17/06/2021',
        assignee: 'AA',
        image: require('../../assets/profile.png'),
        done: true
    },
    {
        id: 7,
        task: 'DB',
        dueDate: '18/06/2021',
        assignee: 'AA',
        image: require('../../assets/profile.png'),
        done: true
    }
]

const initialState = {
    tasks: initialTasks,
    doneTasks: initialDoneTasks
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            console.log('reducer/tasks.js 77' + JSON.stringify(action));
            //TODO check
            return {
                ...state,
                // tasks: action.tasks
            }
        case ADD_TASK:
            console.log('reducer/tasks.js 83' + JSON.stringify(action));
            const newTask = {
                    id: action.taskData.id,
                    task: action.taskData.task,
                    dueDate: action.taskData.dueDate,
                    assignee: action.taskData.assignee,
                    done: false
                }
            console.log('reducer/tasks.js 91' + JSON.stringify(newTask));
            console.log(state);
            const addedTasks = [...state.tasks,newTask]
            console.log('reducer/tasks.js 94' + JSON.stringify(addedTasks));
            return {
                ...state,
                tasks: addedTasks
            }
        case UPDATE_TASK:
            console.log('reducer/tasks.js 100' + JSON.stringify(action));
            const taskIndex = state.tasks.findIndex(task => task.id === action.taskData.id);
            const updatedTask = {
                id: action.taskData.id,
                task: action.taskData.task,
                dueDate: action.taskData.dueDate,
                assignee: action.taskData.assignee
            }
            const updatedTasks = [...state.tasks];
            updatedTasks[taskIndex] = updatedTask;
            console.log('reducer/tasks.js 110' + JSON.stringify(updatedTask));
            console.log('reducer/tasks.js 111' + JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks
            }
        case TOGGLE_DONE:
            const doneTask = state.tasks.find(task => task.id === action.taskId);
            console.log('reducer/tasks.js 116' + JSON.stringify(doneTask));
            console.log('reducer/tasks.js 117' + JSON.stringify(state.tasks));
            state.tasks.splice(doneTask.id, 1);
            return {
                ...state,
                doneTasks: state.doneTasks.concat(doneTask)
            }
        default:
            return state;
    }
}

export default tasksReducer;
