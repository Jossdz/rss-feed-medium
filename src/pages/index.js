import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people I'm </h1>
    <pre>{JSON.stringify(data, null, 4)}</pre>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {data.allFeedjossBlog.edges.map(({ node: { title, content } }) => {
      console.log(title)
      return (
        <>
          <h2>{title}</h2>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content.encoded }}
          ></div>
        </>
      )
    })}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  {
    allFeedjossBlog {
      edges {
        node {
          title
          categories
          content {
            encoded
          }
        }
      }
    }
  }
`

export default IndexPage
