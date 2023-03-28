import React from 'react';
import { useAuthentication } from '@hooks/useAuthentication';
import  AuthRoute from './auth.routes';
import  UserRoute from './user.routes';

const Router = () => {
    const { token } = useAuthentication();


    return !token ? (
    <AuthRoute/>
    ) : (
    <UserRoute/>
    );
};

export default Router;