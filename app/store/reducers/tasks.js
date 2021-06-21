/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 5:28 PM
 * Copyright (c) 2021. All rights reserved.
 */

import {TOGGLE_DONE} from "../actions/tasks";

const initialTasks = [
    {
        id: 1,
        title: 'Complete components',
        description: '19/06/2021',
        image: require('../../assets/profile.png'),
        done: false
    },
    {
        id: 2,
        title: 'Complete screens',
        description: '20/06/2021',
        image: require('../../assets/profile.png'),
        done: false
    },
    {
        id: 3,
        title: 'Complete backend',
        description: '22/06/2021',
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
        title: 'UI Design',
        description: '17/06/2021',
        image: require('../../assets/profile.png'),
        done: true
    },
    {
        id: 7,
        title: 'DB',
        description: '18/06/2021',
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
        case TOGGLE_DONE:
            const doneTask = state.tasks.find(task => task.id === action.taskId)
            state.tasks.splice(doneTask.id,1)
            return { state, doneTasks: state.doneTasks.concat(doneTask)}
        default:
            return state;
    }
}

export default tasksReducer;
