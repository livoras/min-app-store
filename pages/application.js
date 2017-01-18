import { Component, PropTypes } from 'react'
import Page from '../components/Page'
import apiClient from '../common/apiClient'
import moment from 'moment'
import Block from '../components/Block'
import { FONT_FAMILY } from '../common/constants'
import { BACKEND_URL } from '../config'

class Pre extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render () {
    return (
      <pre style={{
        padding: '10px',
        lineHeight: '1.2rem',
        fontSize: '.8rem',
        whiteSpace: 'pre-wrap',
        fontFamily: FONT_FAMILY
      }}>{this.props.children}</pre>
    )
  }
}
export default class Application extends Component {
  static propTypes = {
    application: PropTypes.object,
    pageUrl: PropTypes.string
  }

  static async getInitialProps ({ query }) {
    const application = await apiClient.get(`/applications/${query.applicationId}`)
    return { application }
  }

  componentDidMount () {
    global.duoshuoQuery = {short_name: 'xiaohuoziapp'}
    const ds = document.createElement('script')
    ds.type = 'text/javascript'
    ds.setAttribute('id', 'dsscript')
    ds.async = true
    ds.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js'
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds)
  }

  componentWillUnmount () {
    const script = document.getElementById('dsscript')
    script.parentNode.removeChild(script)
  }

  render () {
    const { application } = this.props
    const iconSize = 110
    return (
      <Page>
        <div style={{
          padding: '15px',
          minHeight: '160px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <img
            style={{
              flex: '0 0 1',
              borderRadius: '5px',
              marginRight: '10px'
            }}
            width={iconSize}
            height={iconSize}
            src={application.icon} />
          <div style={{
            height: `${iconSize}px`,
            flex: '0 0 200px',
            display: 'flex',
            marginRight: '25%',
            flexDirection: 'column'
          }}>
            <div style={{
              fontSize: '1.2rem',
              color: '#000000',
              display: 'flex',
              alignItems: 'center',
              height: '40px'
            }}>
              {this.props.application.name}
            </div>
            {application.category
              ? <span style={{ fontSize: '.5rem', fontWeight: 'light' }}>
                <span style={{ color: '#7D8994' }}>分类</span>：{application.category.name}
              </span>
              : null
            }
            <span style={{ marginTop: '5px' }}>
              <span style={{ color: '#7D8994' }}>开发者</span>：{application.developerName}
            </span>
            <span style={{ marginTop: '5px' }}>
              <span style={{ color: '#7D8994' }}>发布时间</span>：{moment().format('YYYY-MM-DD HH:mm')}
            </span>
          </div>
          <div style={{ flex: '0 0 200px' }}>
            <img
              style={{
                borderRadius: '2px',
                border: '1px solid #CCCCCC',
                padding: '5px',
                width: '150px',
                height: '150px'
              }}
              src={application.qrcode} />
          </div>
        </div>
        <div>
          <Block title='应用截图'>
            <div style={{ overflowX: 'scroll', display: 'flex' }}>
              {application.screenshots.map((screenshot, i) => {
                const ration = 375 / 667
                const width = 150
                return (
                  <div key={i} style={{
                    flex: `0 0 ${width}px`,
                    height: `${width / ration}px`,
                    backgroundSize: 'cover',
                    margin: '10px 10px',
                    backgroundImage: `url(${screenshot})`
                  }} />
                )
              })}
            </div>
          </Block>
          <Block title='应用介绍'>
            <Pre>{application.description}</Pre>
          </Block>
          <Block title='版本信息'>
            <Pre>
              {application.versions.map((version) =>
                `${version.version} 发布于 ${moment(version.publishDate).format('YYYY年MM月DD日')}\n${version.changelog}`
              ).join('\n\n')}
            </Pre>
          </Block>
          <Block title='评论'>
            <div className='ds-thread' data-thread-key={application._id} data-title={application.name} data-url={`${BACKEND_URL}/applications/${application._id}`} />
          </Block>
        </div>
      </Page>
    )
  }
}
