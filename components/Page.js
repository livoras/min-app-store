import Head from 'next/head'
import { Component, PropTypes } from 'react'

export default class extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  }

  render () {
    return (
      <div>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta name='renderer' content='webkit' />
          <meta httpEquiv='Cache-Control' content='no-siteapp' />
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
          <title>鹿战终极管理系统</title>
        </Head>
        <link rel='stylesheet' type='text/css' href='/static/styles/antd.min.css' />
        <div>{this.props.children}</div>
      </div>
    )
  }
}
