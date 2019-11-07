import * as React from 'react';
import './index.less'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../../../utils/history'
export interface RouteType {
    path: string;
    // component: React.ElementType;
    component: React.LazyExoticComponent<any>
}
const jd = React.lazy(() => import('../../../views/Jd'))
const routes: RouteType[] = [
    {
        path: '/home/jd',
        component: jd
    },
]
class CommonContentComponent extends React.Component {

    render() {
        return (
            <div className='common-content'>
                <div className="common-router-contain">
                    <Router history={history}>
                        <Switch>
                            {
                                routes.map((item) => {
                                    return <Route path={item.path} exact component={item.component} key={item.path}/>
                                })
                            }
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}

export default CommonContentComponent