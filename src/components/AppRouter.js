import React, { useContext } from 'react';
import {Route, Routes} from 'react-router-dom'
import NotFound from '../pages/NotFound';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';

const AppRouter =() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
    <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} exact element={<Component/>}/>
        )}
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} exact element={<Component/>}/>
        )}
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    );
};

export default AppRouter;