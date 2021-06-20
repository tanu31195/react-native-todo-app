/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 1:53 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import AppScreen from '../components/AppScreen';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';

const initialTasks = [
    {
        id: 1,
        title: 'Complete components',
        description: '19/06/2021',
        image: require('../assets/profile.png')
    },
    {
        id: 2,
        title: 'Complete screens',
        description: '20/06/2021',
        image: require('../assets/profile.png')
    },
    {
        id: 3,
        title: 'Complete backend',
        description: '22/06/2021',
        image: require('../assets/profile.png')
    },
    // {
    //     id: 1,
    //     assignee: "Tanushka",
    //     title: "Complete UI",
    //     completed: true,
    //     dueDate: "19/06/2021"
    // },
    // {
    //     id: 2,
    //     assignee: "Tim",
    //     title: "Complete Styling",
    //     completed: false,
    //     dueDate: "20/06/2021"
    // }
]

export default function TasksScreen({navigation}) {
    const [tasks, setTasks] = useState(initialTasks);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        console.log(message);
        setTasks(tasks.filter((m) => m.id !== message.id));
    }

    return (
        <AppScreen>
            <FlatList
                data={tasks}
                keyExtractor={task => task.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => navigation.navigate("TaskEditScreen", item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setTasks(initialTasks)}
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({})
