import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { kebabCase } from 'lodash'


class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const blogPostSchema = JSON.stringify(posts.map(post => (
      {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "name": `${post.node.frontmatter.title}`,
      'headline': `${post.node.frontmatter.title}`,
      "mainEntityOfPage": `https://peter.macinkovic.id.au${post.node.fields.slug}`,
      "alternativeHeadline": `${post.node.frontmatter.title}`,
      "image": { 
        "@type": "imageObject", 
        "url": `https://peter.macinkovic.id.au${
          !!post.node.frontmatter.image.childImageSharp ? post.node.frontmatter.image.childImageSharp.fluid.src : post.node.frontmatter.image
        }`,
        "height": "640px",
        "width": "1280px"
        },
        "author": "Peter Macinkovic",
        "genre": "SEO and Technical Marketing",
        "wordcount": `${post.node.fields.readingTime.words}`,
        "publisher": {
          "@type": "Organization",
          "name": "Peter Macinkovic",
          "logo": {
          "@type": "imageObject",
          "url": `https://peter.macinkovic.id.au/img/peter-macinkovic.jpg`,
          "height": "200px",
          "width": "200px"
          },
          "mainEntityOfPage": "https://peter.macinkovic.id.au",
          "sameAs": ["https://au.linkedin.com/in/inkovic", "https://www.facebook.com/inkovic/", "https://www.twitter.com/inkovic/", "https://www.instagram.com/inkovic/"],
          "url": "https://peter.macinkovic.id.au"
        },
      "url": `https://peter.macinkovic.id.au${post.node.fields.slug}`,
      "datePublished": `${ post.node.frontmatter.date }`,
      "dateModified": `${ post.node.frontmatter.date }`,
      "description": `${ post.node.frontmatter.description}`,
    })))
    const trimBlogPostSchema = blogPostSchema.substring(1, blogPostSchema.length-1);
    const blogSchema = JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "mainContentOfPage": {
          "@type": "WebPageElement",
          "cssSelector": ".blog-posts"
        },
        "breadcrumb":
        {
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
              "item": {
                "@type": "ListItem",
                  "@id":  `https://peter.macinkovic.id.au/`,
                  "name": "👨 Peter Macinkovic"
                }
            },{
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": `https://peter.macinkovic.id.au/blog`,
              "name": "📚Blog"
            }
          },{
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": `https://peter.macinkovic.id.au/tags/`,
              "name": "🔖Tags"
            }
          },{
            "@type": "ListItem",
            "position": 4,
              "item": {
              "@id": `https://peter.macinkovic.id.au/tags/${kebabCase(tag)}/`,
              "name": `📈 ${tag}`
              }
            }]
          },
          "mainEntity":
            {
              "@type": "Blog", 
              "author": "Peter Macinkovic",
              "blogPosts": `${trimBlogPostSchema}`,
            },
        }
    )
   const old1 = 'blogPosts":"'
   const repl1 = 'blogPosts":['
   const old2 = '"}"}'
   const repl2 = '"}]}'
    const replaceBlogSchema = blogSchema.replace(old1, repl1).replace(old2, repl2).split('\\').join('').trim()
    const postLinks = posts.map(post => (
      <div className="column is-12" key={post.id}>
              <article className="tile is-parent box notification">
                <div className="column is-6">
                  <PreviewCompatibleImage imageInfo={post.node.frontmatter} />
                </div>
                <div className="column is-6">
                  <p>
                    <Link
                      className="blogroll-title is-size-4"
                      to={post.node.fields.slug}
                    >
                      {post.node.frontmatter.title}</Link>
                    <span 
                    className="blogroll-subtitle is-block">
                      <span id={`publish-date-${post.node.id}`}><span aria-labelledby={`publish-date-${post.node.id}`} role="img">📅</span> Published on {post.node.frontmatter.date}</span> by Peter Macinkovic   <br/><span id={`reading-time-${post.node.id}`}><span aria-labelledby={`reading-time-${post.node.id}`} role="img">🕑</span> {post.node.fields.readingTime.text}</span>  <span id={`wordcount-${post.node.id}`}><span aria-labelledby={`wordcount-${post.node.id}`} role="img">🖹</span> {post.node.fields.readingTime.words} words</span>
                    </span>
                  </p>
                  <p>
                    {post.node.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.node.fields.slug}>
                      Keep Reading →  
                    </Link>
                  </p>
                </div>
              </article>
            </div>
    ))
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } filed under “${tag}”`
    const checkNoIndex = (totalCount < 2 ?
        <meta name="robots" content="noindex" />
      :
        <meta name="robots" content="all"/>
    )
    return (
      <Layout>
        <section className="section">
          <Helmet title={`${totalCount} articles filed under ${tag} | Peter Macinkovic Blog`} />
          <Helmet>
          <meta name={`A list of ${totalCount} articles filed under the category of ${tag} on the personal blog of Peter Macinkovic.`} />
          {checkNoIndex}
          <script type="application/ld+json">{replaceBlogSchema}
          </script>
          </Helmet>
          <Helmet>
          </Helmet>
          <main className="container content blog-posts">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem', marginTop: '1rem' }}
              >
                <h3 className="title is-size-2 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </main>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
