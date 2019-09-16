import React from 'react'
import blogBG from '../../../static/img/melbourne-skyline-flinders.jpg'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import BlogRollSchema from '../../components/BlogRollSchemaOrg'
import Helmet from 'react-helmet'


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <main className="container blog-posts">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${blogBG})`,
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1 blog-title-wrap "
                  style={{
                    color: `#FFFFFF`,
                    padding: `0.5rem 1rem`,
                  }}
                >
                  Latest Blog Posts
                </h1>
              </div>
            </div>
            <BlogRoll />
            <BlogRollSchema />
          </main>
        </section>
      </Layout>
    )
  }
}

export const allBlogsQuery = graphql`
  query BlogPage {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 260)
          id
          html
          fields {
            slug
            readingTime {
              text
              words
            }
          }
          frontmatter {
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`