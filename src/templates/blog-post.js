import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import peterAvatar from '../../static/img/peter-macinkovic.jpg'
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  image,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content article">
        <div className="columns is-parent tile">
          <main className="column is-8 is-child">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <img src={image} />

            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </main>
          <aside className="column is-4 is-child">
              <div className="author-card--sidebar columns box">
                      <div className="author-card-image column is-4 is-4-mobile">
                          <img src={peterAvatar} alt="Peter Macinkovic" />
                      </div>
                     <div className="author-card-desc column is-8 is-8-mobile">
                       <strong>About the Author</strong>
                       <p>Peter Macinkovic is a Digital Marketer and eCommerce Specialist based in Melbourne, Australia. </p>
                       <p>He lives his beautiful wife, Aki, and knows more about the internals of Shopify then any human should.</p>
                       <p>Flash apologist. SEO Zealot.</p>
                     </div>
              </div>        
          </aside>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
        description
        tags
      }
    }
  }
`
