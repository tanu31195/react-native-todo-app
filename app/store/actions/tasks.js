/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/23/21, 5:40 PM
 * Copyright (c) 2021. All rights reserved.
 */

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SET_TASKS = 'SET_TASKS';
export const TOGGLE_DONE = 'TOGGLE_DONE';

export const fetchTasks = () => {
    return async dispatch => {
        const response = await fetch('https://react-native-todo-app-b68b6-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json');
        const resData = await response.json();
        console.log('actions/tasks.js 16' + JSON.stringify(resData));
        const loadedTasks = [];
        for (const key in resData) {
            loadedTasks.push({id: key, task: resData[key].task, dueDate: resData[key].dueDate, assignee: resData[key].assignee, done: resData[key].done})
        }
        console.log('actions/tasks.js 21' + JSON.stringify(loadedTasks));
        dispatch({type: SET_TASKS, tasks: loadedTasks});
    }
}
// export const addTask = (task, dueDate, assignee) => {
//     return {
//         type: ADD_TASK,
//         taskData: {
//             task,
//             dueDate,
//             assignee
//         }
//     };
// };
export const addTask = (task, dueDate, assignee,done) => {
    return async dispatch => {
        const response = await fetch('https://react-native-todo-app-b68b6-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                task,
                dueDate,
                assignee,
                done
            })
        });
        const resData = await response.json();
        console.log('actions/tasks.js 35' + JSON.stringify(resData));
        dispatch({
            type: ADD_TASK,
            taskData: {
                id: resData.name,
                task,
                dueDate,
                assignee,
                done
            }
        });
    };
};

export const updateTask = (id, task, dueDate, assignee) => {
    return {
        type: UPDATE_TASK,
        taskData: {
            id,
            task,
            dueDate,
            assignee
        }
    };
};

export const toggleDone = (id) => {
    return {type: TOGGLE_DONE, taskId: id};
};
