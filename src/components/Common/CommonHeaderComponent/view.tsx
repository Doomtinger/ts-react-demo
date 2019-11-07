import * as React from 'react'
import './index.less'
import history from '../../../utils/history'
import CommonMenuComponent from '../CommonMenuComponent'
export interface menus  {
    title: string,
    icon: string,
    key: string,
    subs?: menus[]
}
// 图片
export interface IProps {
    
}
export interface IState {
    collapsed: Boolean,
}
class CommonHeaderComponent extends React.Component<IProps, IState> {
    state = {
        collapsed: false
    }

    componentDidMount() {
        
    }

    render() {
        const menus: menus[] = [
            {
                title: '首页',
                icon: 'home',
                key: '/home'
            },
            {
                title: '基本组件',
                icon: 'laptop',
                key: '/home/general',
                subs: [
                    { key: '/home/general/button', title: '按钮', icon: '', },
                    { key: '/home/general/icon', title: '图标', icon: '', },
                ]
            },
        ]
        return (
            <div className="common-header flex">
                <div className="menu-logo">
                    <img src={require("../../../assets/svg/header/logo.svg")} alt=""/>
                </div>
                <div className="menu-content">
                    <CommonMenuComponent menus={menus}></CommonMenuComponent>
                </div>
            </div>
        )
    }
}

export default CommonHeaderComponent