/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/18/21, 9:34 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import {FlatList} from "react-native";
import {ListItem} from "../components/lists";

const todos = [
    {
        id: 1,
        assignee: "Tanushka",
        title: "Complete UI",
        completed: true,
        dueDate: "19/06/2021"
    },
    {
        id: 2,
        assignee: "Tim",
        title: "Complete Styling",
        completed: false,
        dueDate: "20/06/2021"
    }
]

function TasksListScreen(props) {
    return (
        <FlatList
            data={todos}
            keyExtractor={todo => todo.id.toString()}
            renderItem={({item}) =>
                <ListItem
                    title={item.title}
                    subTitle={item.dueDate}
                />}
        />
    );
}

export default TasksListScreen;
