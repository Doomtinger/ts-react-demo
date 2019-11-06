import * as React from "react";
import { Route, Redirect, RouteComponentProps, Switch, withRouter} from 'react-router-dom';

interface RProps {
    routes: ReadonlyArray<any>;
}

function RouterBeforeEach(props: RProps & RouteComponentProps) {
    const { routes, location } = props;
    console.log(routes)
    if (location.pathname === '/video') {
        return (
            <Redirect to='/'/>
        )
    } else {
        return (
            <Switch>
                {
                    routes.map((item) => {
                        return <Route exact={true} {...item} key={item.path} />
                    })
                }
                <Redirect from='/*' to='/404' />
            </Switch>
        )
    }
}


export default withRouter(RouterBeforeEach);