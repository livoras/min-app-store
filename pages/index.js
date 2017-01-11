import Page from '../components/Page'
import Link from 'next/link'
import { Component } from 'react'
import { Card } from 'antd'

export default class Index extends Component {
  static async getInitialProps ({ req }) {
    const res = await fetch('http://localhost:3000/api/test')
    return {
      name: await res.json()
    }
  }

  render () {
    return (
      <Page>
        <h1>主页</h1>
        <Link href='/about'><a>Hello World - {this.props.name.name}</a></Link>
        <Card title='Card title' extra={<a href='#'>More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Page>
    )
  }
}
