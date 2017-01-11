import Link from 'next/link'
import { Component, PropTypes } from 'react'
import { Button } from 'antd'

export default class Index extends Component {
  static propTypes = {
    name: PropTypes.object
  }

  static async getInitialProps ({ req }) {
    const res = await fetch('http://localhost:3000/api/test')
    return {
      name: await res.json()
    }
  }

  render () {
    return (
      <div>
        <h1>主页</h1>
        <Link href='/about'><a>Hello World - {this.props.name.name}</a></Link>
        <Button>GOOD</Button>
      </div>
    )
  }
}
