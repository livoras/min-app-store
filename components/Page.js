import Link from 'next/link'
import { Component, PropTypes } from 'react'
import { Layout, Menu } from 'antd'

const { Header, Content, Sider } = Layout
const SubMenu = Menu.SubMenu

export default class Index extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
    wrapperStyle: PropTypes.object
  }

  render () {
    return (
      <div>
        <Header style={{ padding: 0 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            marginLeft: 50,
            width: 200,
            float: 'left',
            textAlign: 'center',
            fontSize: 16,
            color: '#108ee9'
          }}>
            <img src='/static/images/logo.svg' style={{
              width: 35,
              lineHeight: 64,
              marginRight: 10
            }} />小程序应用商店
          </div>
          <Menu mode='horizontal' style={{ lineHeight: '64px' }}>
            <Menu.Item key='home'>
              <Link href='/'><a>首页</a></Link>
            </Menu.Item>
            <SubMenu title='管理'>
              <Menu.Item><Link href='/management/categories'><a>分类管理</a></Link></Menu.Item>
              <Menu.Item><Link href='/management/applications'><a>小程序管理</a></Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
        <div style={Object.assign({
          width: '100%',
          maxWidth: 960,
          backgroundColor: '#FFFFFF',
          margin: '0 auto',
          padding: '0 15px 15px 15px',
          minHeight: 600,
          marginTop: 20
        }, this.props.wrapperStyle || {})}>
          {this.props.title
            ? <div style={{
              lineHeight: '40px',
              height: '40px',
              width: '100%',
              padding: '0 15px',
              borderBottom: '1px solid #ededed'
            }}>{this.props.title}</div>
            : null
          }
          {this.props.children}
        </div>
        <div style={{
          width: '100%',
          height: '150px',
          marginTop: '15px',
          backgroundColor: '#FFFFFF'
        }}>
          OK
          </div>
      </div>
    )
  }
}
