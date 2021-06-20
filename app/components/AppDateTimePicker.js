/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/19/21, 11:24 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React, {useState} from 'react';
import {Button, Platform, View} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function AppDateTimePicker(props) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        console.log(currentDate);
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('datetime');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View><View>
            <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
            <View>
                {/*<Button onPress={showTimepicker} title="Show time picker!" />*/}
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}</View>
    );
}

export default AppDateTimePicker;
