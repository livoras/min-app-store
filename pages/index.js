import { Component, PropTypes } from 'react'
import Page from '../components/Page'

export default class Index extends Component {
  static propTypes = {
    name: PropTypes.object
  }

  render () {
    return (
      <Page>Hello World</Page>
    )
  }
}
