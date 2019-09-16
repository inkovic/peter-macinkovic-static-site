import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import peterAvatar from "../../static/img/peter-macinkovic.jpg";
import tagsSVG from "../img/fa-tags.svg";
import mediumLogo from "../img/social/medium.svg";
//import melbSkyline from '../../static/img/melbourne-skyline-flinders.jpg'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  image,
  readingtime,
  wordcount,
  slug,
  date,
  tags,
  title,
  frontmatter,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <main className="blog-post">
      {helmet || ""}
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`
        }}
      >
        <div className="blog-title-wrap">
          <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
            {title}
          </h1>
          <div className="has-text-centered;">
            <span id="publish-date">
              <span aria-labelledby="publish-date" role="img">
                📅
              </span>{" "}
              Published on {date}
            </span>{" "}
            by Peter Macinkovic{" "}
            <span id="reading-time">
              <span aria-labelledby="reading-time" role="img">
                🕑
              </span>{" "}
              {readingtime}
            </span>{" "}
            <span id="wordcount">
              <span aria-labelledby="worcount" role="img">
                🖹
              </span>{" "}
              {wordcount} words
            </span>
          </div>
        </div>
      </div>

      <div className="container content article">
        <div className="columns is-parent">
          <article className="article-body column is-8 is-child">
            <PostContent content={content} />
          </article>
          <aside className="column is-child">
            <div class="aside--wrap">
              <div className="author-card--sidebar box">
                <div className="author-card-image">
                  <img src={peterAvatar} alt="Peter Macinkovic" />
                </div>
                <div className="author-card-desc">
                  <strong>About the Author</strong>
                  <p>
                    <a href="https://peter.macinkovic.id.au/about/" rel="me">
                      Peter Macinkovic
                    </a>{" "}
                    is a Technical SEO Strategist and eCommerce Specialist based in
                    Melbourne, Australia.
                  </p>
                  <p>
                    He lives his beautiful wife, Aki, and knows more about the
                    internals of Shopify then any human should.
                  </p>
                  <p>Flash apologist. SEO Zealot.</p>
                </div>
              </div>
              {tags && tags.length ? (
                <div
                  className="blog-categories box"
                  style={{ marginTop: `2rem` }}
                >
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>
                          <span>
                            <object
                              type="image/svg+xml"
                              className="social-svg"
                              data={tagsSVG}
                            />
                          </span>{" "}
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  frontmatter: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        frontmatter={post.frontmatter}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        wordcount={post.fields.readingTime.words}
        slug={post.fields.slug}
        readingtime={post.fields.readingTime.text}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta name="og:title" content={`${post.frontmatter.title}`} />
            <meta
              name="og:description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              property="og:image"
              content={`${
                !!post.frontmatter.image.childImageSharp
                  ? post.frontmatter.image.childImageSharp.fluid.src
                  : post.frontmatter.image
              }}`}
            />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                mainContentOfPage: {
                  "@type": "WebPageElement",
                  cssSelector: ".blog-post"
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: `https://peter.macinkovic.id.au${
                    !!post.frontmatter.image.childImageSharp
                      ? post.frontmatter.image.childImageSharp.fluid.src
                      : post.frontmatter.image
                  }`,
                  height: "640px",
                  width: "1280px",
                  representativeOfPage: "https://schema.org/True"
                },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      item: {
                        "@type": "ListItem",
                        "@id": `https://peter.macinkovic.id.au`,
                        name: "👨 Peter Macinkovic"
                      }
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      item: {
                        "@id": `https://peter.macinkovic.id.au/blog`,
                        name: "📚Blog"
                      }
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      item: {
                        "@id": `https://peter.macinkovic.id.au${
                          post.fields.slug
                        }`,
                        name: `${post.frontmatter.emoji} ${
                          post.frontmatter.title
                        }`
                      }
                    }
                  ]
                },
                mainEntity: {
                  "@type": `BlogPosting`,
                  headline: `${post.frontmatter.title}`,
                  mainEntityOfPage: `https://peter.macinkovic.id.au${
                    post.fields.slug
                  }`,
                  alternativeHeadline: `${post.frontmatter.title}`,
                  image: {
                    "@type": "imageObject",
                    url: `https://peter.macinkovic.id.au${
                      !!post.frontmatter.image.childImageSharp
                        ? post.frontmatter.image.childImageSharp.fluid.src
                        : post.frontmatter.image
                    }`,
                    height: "640px",
                    width: "1280px"
                  },
                  author: "Peter Macinkovic",
                  genre: "SEO and Technical Marketing",
                  wordcount: `${post.fields.readingTime.words}`,
                  publisher: {
                    "@type": "Organization",
                    name: "Peter Macinkovic",
                    logo: {
                      "@type": "imageObject",
                      url: `https://peter.macinkovic.id.au/img/peter-macinkovic.jpg`,
                      height: "200px",
                      width: "200px"
                    },
                    mainEntityOfPage: "https://peter.macinkovic.id.au",
                    sameAs: [
                      "https://au.linkedin.com/in/inkovic",
                      "https://www.facebook.com/inkovic/",
                      "https://www.twitter.com/inkovic/",
                      "https://www.instagram.com/inkovic/"
                    ],
                    url: "https://peter.macinkovic.id.au"
                  },
                  url: `https://peter.macinkovic.id.au${post.fields.slug}`,
                  datePublished: `${post.frontmatter.date}`,
                  dateModified: `${post.frontmatter.date}`,
                  description: `${post.frontmatter.description}`,
                  articleBody: `${post.html.replace(/(<([^>]+)>)/gi, "")}`
                }
              })}
            </script>
          </Helmet>
        }
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        date(formatString: "MMMM DD, YYYY")
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1280, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        emoji
        title
        description
        tags
      }
    }
  }
`;
