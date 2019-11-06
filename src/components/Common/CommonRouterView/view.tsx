import *as React from 'react'
import CommonContentComponent from '../CommonContentComponent'
import CommonHeaderComponent from '../CommonHeaderComponent'
import CommonMenuComponent from '../CommonMenuComponent'

class CommonRouterView extends React.Component {
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

export default CommonRouterView