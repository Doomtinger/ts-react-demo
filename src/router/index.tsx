import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterBeforeEach from './RouterBeforeEach';
// import history from '../utils/history'
// import { Router, Route, Switch } from 'react-router-dom'
// import Home from '../components/common/CommonRouterView'
import './style.less';

import { Spin } from 'antd';

export interface RouteType {
    path: string;
    component: React.ElementType;
}

const routes: RouteType[] = [
    {
        path: '/',
        component: React.lazy(() => import('../views/Home/index'))
    },
    {
        path: '/home',
        component: React.lazy(() => import('../views/Home/index'))
    },
    {
        path: '/404',
        component: React.lazy(() => import('../components/NotFoundPage/index'))
    },
]

export default function Index() {
    return (
        <BrowserRouter basename='/home'>
            <React.Suspense fallback={<div className='loading'>
                <Spin />
            </div>}>
                <RouterBeforeEach routes={routes} />
            </React.Suspense>
        </BrowserRouter>
    )
}