/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/21/21, 11:01 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React, {useContext} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import AppScreen from '../components/AppScreen';
import Icon from '../components/Icon';
import { ListItem, ListItemSeparator } from '../components/lists';
import colors from '../config/colors';
import AuthContext from "../auth/context";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

export default function AccountScreen() {
    const {user, setUser} = useContext(AuthContext);
    console.log(user)
    return (
        <AppScreen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    // image={require('../assets/profile.png')}
                    image={{
                        uri: user.photoUrl,
                    }}
                />
            </View>
            {/*<View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>*/}
            <ListItem
                title="Log out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
                onPress={() => setUser(null)}
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})
