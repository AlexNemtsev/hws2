type ThemeState = {
    themeId: number;
};

const initState: ThemeState = {
    themeId: 1,
};

export const themeReducer = (state = initState, action: Action): ThemeState => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { themeId: action.id };

        default:
            return state;
    }
};

type Action = ReturnType<typeof changeThemeId>;

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) as const;
