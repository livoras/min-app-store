import { Component, PropTypes } from 'react'
import Page from '../components/Page'
import { Icon } from 'antd'
import apiClient from '../common/apiClient'
import moment from 'moment'

export default class Index extends Component {
  static propTypes = {
    categories: PropTypes.array,
    applications: PropTypes.array
  }

  static async getInitialProps () {
    const rets = await Promise.all([
      apiClient.get('/categories'),
      apiClient.get('/applications?offset=0&limit=10')
    ])
    return {
      categories: rets[0],
      applications: rets[1]
    }
  }

  render () {
    const eventCates = this.props.categories.filter((category, i) => i % 2 === 0)
    const oddCates = this.props.categories.filter((category, i) => i % 2 === 1)
    return (
      <Page wrapperStyle={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'stretch',
          width: '100%'
        }}>
          <div style={{
            marginTop: 15,
            marginBottom: 0,
            width: '180px',
            borderRight: '1px solid #EDEDED'
          }}>
            <div style={{ marginTop: '-5px', fontSize: '14px' }}>
              <Icon type='appstore' /> 应用分类
            </div>
            <div style={{
              display: 'flex',
              marginTop: 10,
              lineHeight: '31px',
              fontSize: '13px'
            }}>
              <div style={{ flex: 1 }}>
                {eventCates.map((category) => {
                  return (
                    <div key={category._id}>
                      <a style={{ color: '#707070' }}>
                        {category.name}
                      </a>
                    </div>
                  )
                })}
              </div>
              <div style={{ flex: 1 }}>
                {oddCates.map((category) => {
                  return (
                    <div key={category._id}>
                      <a style={{ color: '#707070' }}>{category.name}</a>
                    </div>
                  )
                })}
              </div>
            </div>
            <div style={{ marginTop: '20px', fontSize: '14px', marginBottom: '20px' }}>
              <Icon type='pushpin' /> 最新上架
            </div>
            <div>
              {this.props.applications.map((application) => {
                const iconSize = 40
                return (
                  <div key={application._id} style={{
                    display: 'flex',
                    paddingBottom: '20px'
                  }}>
                    <img
                      src={application.icon}
                      width={iconSize}
                      height={iconSize}
                      style={{
                        borderRadius: '3px'
                      }} />
                    <div style={{ padding: '0 0 0 5px', display: 'flex', flexDirection: 'column' }}>
                      <span style={{
                        color: '#000000',
                        fontSize: '14px'
                      }}>{application.name} </span>
                      <span style={{ color: '#707070', fontSize: '12px' }}>
                        {application.category.name}
                        <span style={{
                          color: '#CCCCCC',
                          marginLeft: '5px',
                          fontWeight: 'lighter'
                        }}>{moment().format('MM-DD HH:mm')}</span>
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div style={{ flex: 1 }}></div>
        </div>
      </Page>
    )
  }
}
