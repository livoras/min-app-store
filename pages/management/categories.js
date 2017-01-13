import { Component, PropTypes } from 'react'
import Page from '../../components/Page'
import apiClient from '../../common/apiClient'
import { Table, Button, Input, Modal } from 'antd'

const confirm = Modal.confirm

export default class Index extends Component {
  static propTypes = {
    categories: PropTypes.array
  }

  static async getInitialProps () {
    const categories = await apiClient.get('/categories?offset=0&limit=100000')
    return { categories }
  }

  componentWillMount () {
    this.state = {
      categories: this.props.categories.map((category) => {
        category.key = category._id
        return category
      })
    }
  }

  async addNewCategory () {
    const newCategoryName = this.refs.input.refs.input.value
    try {
      const newCategory = await apiClient.post('/categories', {
        name: newCategoryName
      })
      newCategory.key = newCategory._id
      this.setState({
        categories: [newCategory, ...this.state.categories]
      })
      this.refs.input.refs.input.value = ''
    } catch (e) {
      alert(e)
    }
  }

  tryToDelete (categoryId, index) {
    confirm({
      title: '确定要删除该分类吗？',
      content: '请确认该分类下不存在应用程序',
      onOk: async () => {
        try {
          await apiClient.delete(`/categories/${categoryId}`)
        } catch (e) {
          alert(e)
        }
        this.state.categories.splice(index, 1)
        this.setState({
          categories: this.state.categories
        })
      },
      onCancel () {}
    })
  }

  changeCategoryName (category, index, event) {
    category.name = event.target.value
    this.setState({ categories: this.state.categories })
  }

  async saveCategory (category) {
    try {
      await apiClient.put(`/categories/${category._id}`, category)
      Modal.success({ title: '保存成功！' })
    } catch (e) {
      alert(e)
    }
  }

  render () {
    const columns = [{
      title: '分类名称',
      dataIndex: 'name',
      key: '_id',
      render: (name, category, index) => {
        return (
          <Input style={{ width: 200 }} defaultValue={name} onChange={this.changeCategoryName.bind(this, category, index)} value={name} />
        )
      }
    }, {
      title: '操作',
      render: (category, _category, index) => {
        return (
          <div>
            <Button type='primary' onClick={this.saveCategory.bind(this, category)} style={{ marginRight: 10 }}>保存</Button>
            <Button type='delete' onClick={this.tryToDelete.bind(this, category._id, index)}>删除</Button>
          </div>
        )
      }
    }]
    return (
      <Page title='分类管理'>
        <div style={{ overflow: 'hidden', padding: '10px 0' }}>
          <Input ref='input' placeholder='输入类别的名称' size='default' style={{ width: 200 }} />
          <Button onClick={::this.addNewCategory} style={{ marginLeft: '10px' }}>新增</Button>
        </div>
        <Table
          pagination={{ pageSize: 100 }}
          columns={columns}
          dataSource={this.state.categories}
          showHeader={false} />
      </Page>
    )
  }
}
