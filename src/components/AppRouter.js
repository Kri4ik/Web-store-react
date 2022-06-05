import React from 'react';
import {Route, Routes} from 'react-router-dom'
import NotFound from '../pages/NotFound';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter =() => {
    const isAuth = false;
    return (
    <Routes>
        {isAuth && authRoutes.map(({path, Component}) =>
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