import Page from '../components/Page'
import Link from 'next/link'
import { Component } from 'react'

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
      </Page>
    )
  }
}
