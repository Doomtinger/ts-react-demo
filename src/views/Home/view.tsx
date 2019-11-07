import * as React from 'react';

import CommonContentComponent from '../../components/Common/CommonContentComponent'
import CommonHeaderComponent from '../../components/Common/CommonHeaderComponent'

class Home extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="common-view">
                <CommonHeaderComponent></CommonHeaderComponent>
                <CommonContentComponent></CommonContentComponent>
            </div>
        )
    }
}

export default Home