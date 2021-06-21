/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/20/21, 5:13 PM
 * Copyright (c) 2021. All rights reserved.
 */

export const TOGGLE_DONE = 'TOGGLE_DONE';

export const toggleDone = (id) => {
    return { type: TOGGLE_DONE, taskId: id };
};
