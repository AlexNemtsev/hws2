const initState = {
    themeId: 1,
};

// TODO: убрать eslint-disable
/* eslint-disable */
export const themeReducer = (state = initState, action: any): any => {
    // fix any
    switch (action.type) {
        // дописать

        default:
            return state;
    }
};

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }); // fix any
