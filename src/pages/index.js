// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="餃子部ログ">
      <div class="page_box">
        <p class="intro-msg">
          ようこそ！餃子ブログサイトへ。<br />
          このサイトは、ひたすらに餃子のことを綴るサイトです。<br />
          さらに更新も気まぐれです。ご了承ください。
        </p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
          src="../images/dandadan.jpg"  width="300" height="200" class="gyoza-img"
        />
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
          src="../images/ichien.jpg"  width="300" height="200"
        />
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage