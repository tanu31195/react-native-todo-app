/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/23/21, 7:09 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import AppScreen from '../components/AppScreen';
import { ListItem, ListItemDoneAction, ListItemSeparator } from '../components/lists';
import { toggleDone,fetchTasks} from "../store/actions/tasks";

export default function TasksScreen({navigation}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const initialTasks = useSelector(state => state.tasks.tasks)
    const [tasks, setTasks] = useState(initialTasks);
    const [refreshing, setRefreshing] = useState(false);

    const handleDone = task => {
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
                        title={item.task}
                        subTitle={item.dueDate}
                        image={item.image}
                        onPress={() => navigation.navigate("TaskEditScreen", item)}
                        renderRightActions={() => <ListItemDoneAction onPress={() => handleDone(item)} />}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setTasks(tasks)}
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({})
