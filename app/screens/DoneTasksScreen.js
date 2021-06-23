/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/23/21, 7:09 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from "react-redux";

import AppScreen from '../components/AppScreen';
import { ListItem, ListItemDoneAction, ListItemSeparator } from '../components/lists';

export default function DoneTasksScreen({navigation}) {
    const initialDoneTasks = useSelector(state => state.tasks.doneTasks)
    const [tasks, setTasks] = useState(initialDoneTasks);
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
                        title={item.task}
                        subTitle={item.dueDate}
                        image={item.image}
                        // onPress={() => navigation.navigate("TaskEditScreen", item)}
                        // renderRightActions={() => <ListItemDoneAction onPress={() => handleDelete(item)} />}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setTasks(initialDoneTasks)}
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({})
