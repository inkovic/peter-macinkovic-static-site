import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

class BlogRollSchema extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const blogPostSchema = JSON.stringify(posts.map(post => (
      {
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
          }]
          },
          "mainEntity":
            {
              "@type": "Blog", 
              "author": "Peter Macinkovic",
              "blogPosts":
                 `${trimBlogPostSchema}`,
            },
        }
    )
   const old1 = 'blogPosts":"'
   const repl1 = 'blogPosts":['
   const old2 = '"}"}'
   const repl2 = '"}]}'
    const replaceBlogSchema = blogSchema.replace(old1, repl1).replace(old2, repl2).split('\\').join('').trim()
    return (
    <Helmet title={`Peter Macinkovic SEO & eCommerce Blog | ${posts.length} Blog Posts`}>
    <script type="application/ld+json">{replaceBlogSchema}</script>
    </Helmet>
    )
  }
}

BlogRollSchema.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollSchemaQuery {
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
    `}
    render={(data, count) => <BlogRollSchema data={data} count={count} />}
  />
)
