import * as React from 'react'
import './index.less'
import history from '../../../utils/history'
// 图片

interface IProps {
}
interface IState {
}
class CommonHeaderComponent extends React.Component<IProps, IState> {
    constructor(IProps: Readonly<IProps>) {
        super(IProps)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="common-header flex">
                哈哈哈哈
            </div>
        )
    }

    jumpHome = () => {
        history.push({ pathname: '/' })
    }

    jumpLogin = () => {
        history.push({ pathname: '/login' })
    }

    jumpRegister = () => {
        history.push({ pathname: '/login' })
    }
}

export default CommonHeaderComponent