/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 2/25/21, 4:40 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

export default function AppSubmitButton({ title }) {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton onPress={handleSubmit} title={title} />
    )
}
