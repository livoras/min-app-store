import { Component, PropTypes } from 'react'
import Page from '../components/Page'
import Link from 'next/link'
import { Icon, Carousel } from 'antd'
import apiClient from '../common/apiClient'
import moment from 'moment'

export default class Index extends Component {
  static propTypes = {
    categories: PropTypes.array,
    applications: PropTypes.array,
    collections: PropTypes.array,
    isOfCategory: PropTypes.bool
  }

  static async getInitialProps ({ query }) {
    const isOfCategory = !!query.category
    let collectionsOfCategory
    if (isOfCategory) {
      let category = await apiClient.get(`/categories/${query.category}`)
      collectionsOfCategory = await apiClient.get(`/collections?categoryId=${query.category}`)
      if (collectionsOfCategory.length === 0) {
        const applications = await apiClient.get(`/categories/${query.category}/applications`)
        collectionsOfCategory = [{
          _id: 'randomeKey',
          name: category.name,
          applications
        }]
      }
    }
    const rets = await Promise.all([
      apiClient.get('/categories'),
      apiClient.get('/applications?offset=0&limit=20'),
      collectionsOfCategory || apiClient.get('/collections')
    ])
    return {
      categories: rets[0],
      applications: rets[1],
      collections: rets[2],
      isOfCategory
    }
  }

  _sixInGroup (rawItems) {
    const items = [...rawItems]
    if (items.length % 6 !== 0) {
      for (let i = 0, len = 6 - items.length % 6; i < len; i++) {
        items.push(null)
      }
    }
    const rets = items.reduce((groups, item, i) => {
      const index = Math.floor(i / 6)
      if (groups[index]) {
        groups[index].push(item)
      } else {
        groups[index] = [item]
      }
      return groups
    }, [])
    return rets
  }

  renderCategory (category) {
    return (
      <div key={category._id} >
        <Link href={`/?category=${category._id}`}>
          <a style={{ color: '#707070' }}>
            {category.name}
          </a>
        </Link>
      </div>
    )
  }

  render () {
    const eventCates = this.props.categories.filter((category, i) => i % 2 === 0)
    const oddCates = this.props.categories.filter((category, i) => i % 2 === 1)
    const sliders = [
      'http://media.ifanrusercontent.com/media/user_files/trochili/bf/6e/bf6ea00c16c5e27fa42c96e6c6e0baba8e13133d-08fda0244b5397e030ee401fd2bea5b24f78a72b.jpg',
      'http://t5.market.xiaomi.com/thumbnail/jpeg/l750/AppStore/0895735795a6e43aa0ba0ff2f16a2fb12104cfd5c',
      'http://media.ifanrusercontent.com/media/user_files/trochili/98/7e/987efb9c5750a9ceb618c084e40f94f61cff2683-6896a8696b8038f4fc8989ab005e4fccc3b90047.jpg'
    ]
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
            flex: '0 0 180px',
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
                {eventCates.map((category) => this.renderCategory(category))}
              </div>
              <div style={{ flex: 1 }}>
                {oddCates.map((category) => this.renderCategory(category))}
              </div>
            </div>
            <div style={{ marginTop: '20px', fontSize: '14px', marginBottom: '20px' }}>
              <Icon type='pushpin' /> 最新上架
            </div>
            <div>
              {this.props.applications.map((application) => {
                const iconSize = 35
                if (!application) return null
                return (
                  <div key={application._id} style={{
                    display: 'flex',
                    paddingBottom: '15px'
                  }}>
                    <img
                      src={application.icon}
                      width={iconSize}
                      height={iconSize}
                      style={{
                        borderRadius: '3px',
                        margin: '2px'
                      }} />
                    <div style={{ padding: '0 0 0 5px', display: 'flex', flexDirection: 'column' }}>
                      <span style={{ color: '#000000' }}>{application.name} </span>
                      <span style={{
                        color: '#707070',
                        fontSize: '12px',
                        fontWeight: 'lighter'
                      }}>
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
          <div style={{ flex: 1, overflow: 'hidden', padding: '15px 0 0 15px' }}>
            {!this.props.isOfCategory
              ? <div style={{ marginBottom: '10px', display: this.props.isOfCategory ? 'none' : 'block' }}>
                <Carousel autoplay>
                  {sliders.map((slide) => {
                    return (
                      <div
                        key={Math.random()}
                        style={{
                          height: '220px',
                          overflow: 'hidden',
                          backgroundImage: `url(${slide})`,
                          backgroundSize: 'cover'
                        }} />
                    )
                  })}
                </Carousel>
              </div>
              : null
            }
            {this.props.collections.map((collection) => (
              <div key={collection._id} style={{
                border: '1px solid #e9e9e9',
                borderRadius: '2px',
                marginBottom: '20px'
              }}>
                <div style={{
                  padding: '10px',
                  borderBottom: '1px solid #e9e9e9',
                  backgroundColor: '#F9F9F9'
                }}>{collection.name}</div>
                <div style={{ padding: '10px' }}>
                  {collection.applications.length === 0
                    ? <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100px'
                    }}>暂无数据</div>
                    : null
                  }
                  {this._sixInGroup(collection.applications).map((group, i) => {
                    return (
                      <div key={i} style={{ display: 'flex' }}>
                        {group.map((application, i) => {
                          return (
                            application
                              ? <div style={{
                                flex: 1,
                                display: 'flex',
                                height: '135px',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                              }} key={i}>
                                <Link href={`/application?applicationId=${application._id}`}>
                                  <img
                                    src={application.icon}
                                    width={72}
                                    height={72}
                                    style={{
                                      margin: '0 auto',
                                      borderRadius: '5px',
                                      marginBottom: '5px'
                                    }} />
                                </Link>
                                <Link href={`/application?applicationId=${application._id}`}>
                                  <a style={{ display: 'block', width: '72px', color: '#000000' }}>
                                    {application.name}
                                  </a>
                                </Link>
                                {application.category._id
                                  ? <Link href={`/?category=${application.category._id}`}>
                                    <a style={{ width: '72px', fontWeight: 'lighter', color: '#707070' }}>
                                      {application.category.name}
                                    </a>
                                  </Link>
                                  : null
                                }
                              </div>
                              : <div key={i} style={{ flex: 1 }} />
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Page>
    )
  }
}
