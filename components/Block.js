import { Component, PropTypes } from 'react'

export default class Block extends Component {
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    children: PropTypes.any
  }

  render () {
    const { title, children, style } = this.props
    return (
      <div style={Object.assign({
        borderRadius: '2px',
        marginBottom: '20px',
        minHeight: '120px'
      }, style)}>
        <div style={{ padding: '10px', display: 'flex', alignItems: 'center', color: '#000000' }}>
          <span style={{
            display: 'inline-block',
            width: '4px',
            backgroundColor: '#108ee9',
            height: '14px',
            marginRight: '10px'
          }} />
          {title}
        </div>
        <div>{children || '暂无数据'}</div>
      </div>
    )
  }
}
