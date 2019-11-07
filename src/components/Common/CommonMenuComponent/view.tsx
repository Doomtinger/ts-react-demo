import * as React from 'react'
import history from '../../../utils/history'
import './index.less'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { menus } from "../CommonHeaderComponent/view"

const SubMenu = Menu.SubMenu;
export interface Iprops {
    menus: menus[]
}
export interface IState {
    collapsed: Boolean,
    openKeys: any[],
    selectedKeys: any[]
}
class CommonMenuComponent extends React.Component<Iprops, IState> {
    state = {
        collapsed: false,
        openKeys: [],
        selectedKeys: []
    }
    componentDidMount() {

    }
    renderMenuItem = (item: any) => {
        return (
            <Menu.Item key={item.key}>
                <Link to={item.key}>
                    <span>{item.title}</span>
                </Link>
            </Menu.Item>
        )
    }
    renderSubMenu = (item: any ) => {
        return (
            <Menu.SubMenu key={item.key} title={<span>{item.title}</span>}>
                {
                    item.subs && item.subs.map((v: any )=> {
                        return v.subs && v.subs.length > 0 ? this.renderSubMenu(v) : this.renderMenuItem(v)
                    })
                }
            </Menu.SubMenu>
        )
    }
    public onOpenChange = (openKeys: any[]) => {
        if (openKeys.length === 0 || openKeys.length === 1) {
            this.setState({
                openKeys
            })
            return
        }

        //最新展开的菜单
        const latestOpenKey = openKeys[openKeys.length - 1]
        //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
        //因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
        //只适用于3级菜单
        if (latestOpenKey.includes(openKeys[0])) {
            this.setState({
                openKeys
            })
        } else {
            this.setState({
                openKeys: [latestOpenKey]
            })
        }
    }
    render() {
        const { openKeys, selectedKeys } = this.state
        const { menus } = this.props    
        // console.log(menus)
        return (
            <div className="common-menu">
                <div className="menu-content">
                    <Menu
                        selectedKeys={selectedKeys}
                        onOpenChange={this.onOpenChange}
                        mode='horizontal'
                        theme="dark"
                        onClick={({ key }) => this.setState({ selectedKeys: [key] })}
                        openKeys={openKeys}>
                        {
                            menus && menus.map(item => {
                                return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                            })
                        }
                    </Menu>
                </div>
                <div>
                    我是说明书没事没事么
                </div>
            </div>
        )
    }

    jump = (item: { key: any; }) => {
        history.push({ pathname: item.key })
    }

}

export default CommonMenuComponent