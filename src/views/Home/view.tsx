import * as React from 'react';

import CommonContentComponent from '../../components/Common/CommonContentComponent'
import CommonHeaderComponent from '../../components/Common/CommonHeaderComponent'
import CommonMenuComponent from '../../components/Common/CommonMenuComponent'

class Home extends React.Component {
    componentDidMount() {

    }
    public setInitContent(num: number) {
        this.setState({
            menu_width: num
        })
    }
    render() {
        return (
            <div className="common-view">
                <CommonHeaderComponent></CommonHeaderComponent>
                {
                    true ? (
                        <CommonMenuComponent setContent={this.setInitContent.bind(this)}></CommonMenuComponent>
                    ) : ''
                }
                <CommonContentComponent></CommonContentComponent>
            </div>
        )
    }
}

export default Home