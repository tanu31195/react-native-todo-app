/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 2/25/21, 4:26 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React from 'react';
import { Formik } from 'formik'

export default function AppForm({ children, initialValues, onSubmit, validationSchema }) {
    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}
