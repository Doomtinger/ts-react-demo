import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterBeforeEach from './RouterBeforeEach';
import './style.less';

import { Spin } from 'antd';

export interface RouteType {
    path: string;
    component: React.ElementType;
}

const routes: RouteType[] = [
    {
        path: '/',
        component: React.lazy(() => import('../views/Video/index'))
    },
    {
        path: '/404',
        component: React.lazy(() => import('../components/NotFoundPage/index'))
    }
]

export default function Index() {
    return (
        <BrowserRouter basename='/video'>
            <React.Suspense fallback={<div className='loading'>
                <Spin />
            </div>}>
                <RouterBeforeEach routes={routes} />
            </React.Suspense>
        </BrowserRouter>
    )
}