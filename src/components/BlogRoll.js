import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-12" key={post.id}>
              <article className="tile is-parent box notification">
                <div className="column is-6">
                  <PreviewCompatibleImage imageInfo={post.frontmatter} />

                </div>
                <div className="column is-6">
                  <p>
                    <Link
                      className="blogroll-title is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}</Link>
                    <span 
                    className="blogroll-subtitle is-block">
                      <span id={`publish-date-${post.id}`}><span aria-labelledby={`publish-date-${post.id}`} role="img">📅</span> Published on {post.frontmatter.date}</span> by Peter Macinkovic   <br/><span id={`reading-time-${post.id}`}><span aria-labelledby={`reading-time-${post.id}`} role="img">🕑</span> {post.fields.readingTime.text}</span>  <span id={`wordcount-${post.id}`}><span aria-labelledby={`wordcount-${post.id}`} role="img">🖹</span> {post.fields.readingTime.words} words</span>
                    </span>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →  
                    </Link>
                  </p>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 260)
              id
              fields {
                slug
                readingTime {
                  text
                  words
                }
              }
              frontmatter {
                title
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
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
