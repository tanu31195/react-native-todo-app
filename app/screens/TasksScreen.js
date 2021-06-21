/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 5:12 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import AppScreen from '../components/AppScreen';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';
import { toggleDone} from "../store/actions/tasks";

export default function TasksScreen({navigation}) {
    const dispatch = useDispatch();

    const initialTasks = useSelector(state => state.tasks.tasks)
    const [tasks, setTasks] = useState(initialTasks);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = task => {
        console.log(task);
        setTasks(tasks.filter((m) => m.id !== task.id));
        dispatch(toggleDone(task.id));
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
