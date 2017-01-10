import Page from '../components/Page'
import Link from 'next/link'

export default () => {
  return (
    <Page>
      <h1>About, OK?</h1>
      <Link href='/'><a>主页</a></Link>
    </Page>
  )
}
