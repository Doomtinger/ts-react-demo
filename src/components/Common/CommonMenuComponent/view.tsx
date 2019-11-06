import * as React from 'react'
import history from '../../../utils/history'
import './index.less'
import { Menu,Icon, Button } from 'antd';

// const SubMenu = Menu.SubMenu;
export interface Iprops {
    setContent: (item: number) => void
}
export interface IState {
    collapsed: Boolean,
}
class CommonMenuComponent extends React.Component<Iprops, IState> {
    state = {
        collapsed: false,
    }

    render() {
        return (
            <div className="common-menu">
                <div className="btn-box">
                    <Button className='menu-btn' type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                </div>
                <div className="menu-content">
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="upload" onClick={this.jump}>
                            <Icon type="file-protect" />
                            <span>简历管理</span>
                        </Menu.Item>
                        <Menu.Item key="job-match" onClick={this.jump}>
                            <Icon type="desktop" />
                            <span>职位匹配</span>
                        </Menu.Item>
                        <Menu.Item key="job-consult" onClick={this.jump}>
                            <Icon type="key" />
                            <span>求职资讯</span>
                        </Menu.Item>
                        <Menu.Item key="welfare" onClick={this.jump}>
                            <Icon type="gift" />
                            <span>专属福利</span>
                        </Menu.Item>
                        <Menu.Item key="jd-manage" onClick={this.jump}>
                            <Icon type="setting" />
                            <span>职位管理</span>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }

    jump = (item: { key: any; }) => {
        history.push({ pathname: item.key })
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        this.initContent()
    }
    initContent() {
        setTimeout(() => {
            if (!this.state.collapsed) {
                this.props.setContent(179)
            } else {
                this.props.setContent(80)
            }
        }, 0)

    }
    componentDidMount() {
        this.initContent.bind(this)()
    }
}

export default CommonMenuComponent