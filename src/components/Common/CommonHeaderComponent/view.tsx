import * as React from 'react'
import './index.less'
import history from '../../../utils/history'
// 图片
import Logo from '../../../assets/img/common/logo.png'

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
                <img src={Logo} alt="" className="header-logo" onClick={this.jumpHome} />
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