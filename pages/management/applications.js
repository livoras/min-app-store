import { Component, PropTypes } from 'react'
import Page from '../../components/Page'
import { Button, Card, Row } from 'antd'
import Link from 'next/link'
import apiClient from '../../common/apiClient'

export default class Index extends Component {
  static propTypes = {
    applications: PropTypes.array
  }

  static async getInitialProps () {
    const applications = await apiClient.get('/applications?limit=10000')
    return { applications }
  }

  render () {
    return (
      <Page title='小程序管理'>
        <Button type='primary' style={{ margin: '10px' }}>
          <Link href='/management/createApplication'><a>小程序录入</a></Link>
        </Button>
        <ul>
          {this.props.applications.map((application) => {
            return (
              <li key={application._id} style={{
                width: '121px',
                height: '120px',
                float: 'left',
                margin: 'auto',
                marginRight: 10,
                marginBottom: 10
              }}>
                <div style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div>
                    <img
                      src={application.icon}
                      style={{
                        border: 'none',
                        width: '72px',
                        height: '72px'
                      }} />
                  </div>
                  <div>
                    <Link href={`/management/createApplication?applicationId=${application._id}`}>
                      <a>{application.name}</a>
                    </Link>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Page>
    )
  }
}
