/* eslint-disable no-new-func */
import { Component, PropTypes } from 'react'
import Page from '../../components/Page'
import apiClient from '../../common/apiClient'
import { Form, Input, Button, Icon, Select, Upload } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 10 }
}

export default class Index extends Component {
  static propTypes = {
    categories: PropTypes.array
  }

  static async getInitialProps () {
    return {
      categories: await apiClient.get('/categories')
    }
  }

  constructor () {
    super()
    this.state = {
      versions: []
    }
  }

  bindToState (path) {
    const value = (new Function(`return this.state.${path}`)).call(this)
    return {
      value,
      onChange: (event) => {
        const newValue = event.target.value
        const fn = new Function('newValue', `
          this.state.${path} = newValue;
          this.setState(this.state);
        `)
        fn.call(this, newValue)
      }
    }
  }

  handleAddNewVersion () {
    this.state.versions.push({
      version: '',
      changelog: '',
      publishDate: ''
    })
    this.setState({
      versions: this.state.versions
    })
  }

  handleDeleteVersion (version, index) {
    this.state.versions.splice(index, 1)
    this.setState({
      versions: this.state.versions
    })
  }

  handleLogoUrlChange (data) {
    if (!data.file.response) return
    this.setState({
      icon: data.file.response.data
    })
  }

  handleQRCodeChange (data) {
    if (!data.file.response) return
    this.setState({
      qrcode: data.file.response.data
    })
  }

  async handleCreateApplication () {
    const toSendData = {...this.state}
    if (toSendData.screenshotsUrls) {
      toSendData.screenshots = toSendData.screenshotsUrls.split('\n')
    }
    delete toSendData.screenshotsUrls
    try {
      await apiClient.post('/applications', toSendData)
      alert('创建成功！')
      window.location.reload()
    } catch (e) {
      alert(e)
    }
  }

  render () {
    return (
      <Page title='小程序录入'>
        <Form style={{ marginTop: 30 }}>
          <FormItem {...formItemLayout} label='应用程序名字'>
            <Input {...this.bindToState('name')} />
          </FormItem>
          <FormItem {...formItemLayout} label='应用程序名字'>
            <Select>
              {this.props.categories.map((category) => {
                return <Option key={category._id} value={category._id}>{category.name}</Option>
              })}
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label='开发者名字'>
            <Input {...this.bindToState('developerName')} />
          </FormItem>
          <FormItem {...formItemLayout} label='Logo'>
            <Upload
              className='avatar-uploader'
              showUploadList={false}
              action='/api/common/upload'
              onChange={::this.handleLogoUrlChange}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '3px',
                cursor: 'pointer',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                border: '1px dashed #cccccc'
              }}>
                {this.state.icon
                  ? <img src={this.state.icon} alt='' width={80} height={80} className='avatar' />
                  : <Icon
                    type='plus' className='avatar-uploader-trigger' />
                }
              </div>
            </Upload>
          </FormItem>
          <FormItem {...formItemLayout} label='应用描述'>
            <Input {...this.bindToState('description')} type='textarea' rows={4} />
          </FormItem>
          <FormItem {...formItemLayout} label='应用截图'>
            <Input {...this.bindToState('screenshotsUrls')} type='textarea' rows={4} placeholder='换行隔开' />
          </FormItem>
          <FormItem {...formItemLayout} label='二维码'>
            <Upload
              className='avatar-uploader'
              showUploadList={false}
              action='/api/common/upload'
              onChange={::this.handleQRCodeChange}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '3px',
                cursor: 'pointer',
                justifyContent: 'center',
                width: '150px',
                height: '150px',
                border: '1px dashed #cccccc'
              }}>
                {this.state.qrcode
                  ? <img src={this.state.qrcode} alt='' width={150} height={150} className='avatar' />
                  : <Icon
                    type='plus' className='avatar-uploader-trigger' />
                }
              </div>
            </Upload>
          </FormItem>
          <FormItem {...formItemLayout} label='版本信息'>
            {this.state.versions.map((version, i) => {
              return (
                <div key={i} style={{
                  marginBottom: 15,
                  border: '1px dashed #cccccc',
                  borderRadius: 3,
                  padding: 5,
                  position: 'relative'
                }}>
                  <Icon
                    onClick={this.handleDeleteVersion.bind(this, version, i)}
                    style={{
                      position: 'absolute',
                      top: -5,
                      fontSize: 15,
                      right: -7,
                      color: '#F04134',
                      cursor: 'pointer',
                      zIndex: 1
                    }}
                    type='cross-circle' />
                  <Input placeholder='版本号' {...this.bindToState(`versions[${i}].version`)} style={{ marginBottom: 10 }} />
                  <Input type='date' placeholder='版本号' {...this.bindToState(`versions[${i}].publishDate`)} style={{ marginBottom: 10 }} />
                  <Input placeholder='版本变更信息' {...this.bindToState(`versions[${i}].changelog`)} type='textarea' rows={4} />
                </div>
              )
            })}
            <Button type='normal' size='small' onClick={::this.handleAddNewVersion}>新增</Button>
          </FormItem>
          <FormItem wrapperCol={{ span: 16, offset: 6 }}>
            <Button type='primary' htmlType='submit' size='large' onClick={::this.handleCreateApplication}>创建</Button>
          </FormItem>
        </Form>
      </Page>
    )
  }
}
