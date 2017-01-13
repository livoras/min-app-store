import { Component, PropTypes } from 'react'
import Page from '../../components/Page'

export default class Index extends Component {
  static propTypes = {
    name: PropTypes.object
  }

  render () {
    return (
      <Page title='应用程序录入'>Hello World</Page>
    )
  }
}
