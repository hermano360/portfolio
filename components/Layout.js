import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div>
    <Head>
      <title>Herminio Garcia</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
      <link rel="stylesheet" href="static/css/main.css"/>
    </Head>
    <div className="is-preload">
      <Header />
      {props.children}
      <Footer/>
    </div>
  </div>
)

export default Layout
