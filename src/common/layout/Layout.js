import React, { Component } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
// import mainStyle from '../styles/style.css'
import mainStyle from '../styles/style.scss'
// import mainStyle from '../styles/style.less'

const Layout = (Page) => class Layout extends Component {

  render () {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="renderer" content="webkit" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <link rel="shortcut icon" href="/static/favicon.png" />
          <title>Universal React Boilerplate</title>
          <style dangerouslySetInnerHTML={{ __html: mainStyle }} />
        </Head>
        <Header />
        <Page {...this.props}/>
        <Footer />
      </div>
    )
  }

}

export default Layout