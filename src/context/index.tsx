import React from 'react';
import { AppContext } from './appContext';

const AppProvider = ({children}: any) => {
    return (
        <AppContext>
            {children}
        </AppContext>
    )
};

export default AppProvider;