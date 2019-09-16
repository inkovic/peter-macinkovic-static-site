import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Content, { HTMLContent } from "../components/Content";
import Helmet from "react-helmet";

export const IndexPageTemplate = ({
  content,
  contentComponent,
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => {
  const PostContent = contentComponent || Content;
  const imgStyle = {
    borderRadius: "50%"
  };
  const unstyledList = {
    listStyle : 'none'
  };
  const HomeSchema = (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        type: "WebPage",
        name:
          "Peter Macinkovic | eCommerce SEO Specialist and Digital Marketer",
        description:
          "The personal website of Peter Macinkovic, eCommerce SEO Specialist and Digital Marketing Manager in the online beauty retail sector.",
        mainEntityOfPage: "https://peter.macinkovic.id.au",
        url: "https://peter.macinkovic.id.au",
        image: "https://peter.macinkovic.id.au/img/peter-macinkovic.jpg",
        sameAs: [
          "https://www.linkedin.com/in/inkovic/",
          "https://twitter.com/inkovic",
          "https://instagram.com/inkovic",
          "https://facebook.com/inkovic",
          "https://www.slideshare.net/PeterMacinkovic",
          "https://webmasters.stackexchange.com/users/49404/inkovic",
          "https://medium.com/@inkovic",
          "https://www.theloop.com.au/inkovic/portfolio/Marketer/Melbourne",
          "https://www.crunchbase.com/person/peter-macinkovic",
          "https://github.com/inkovic",
          "https://www.producthunt.com/@peter_macinkovic",
          "https://codepen.io/inkovic/",
          "https://www.deviantart.com/inkovic",
          "https://www.drupal.org/u/inkovic"
        ],
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: ".home-content"
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
            }
          ]
        }
      })}
    </script>
  );
  return (
    <main className="home-content">
      <Helmet>{HomeSchema}</Helmet>
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
        <div
          className="index-title-wrap"
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column"
          }}
        >
          <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
            {title}
          </h1>
          <h2 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
            {subheading}
          </h2>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <h3>
                      Just a Digital Marketer that gets to works on the web
                      and loves it!
                    </h3>
                    <div class="columns">
                      <div class="column is-10">
                        <p>
                          My name is Peter Macinkovic and I am a Technical SEO
                          Strategist and eCommerce Specialist - spending my
                          time tinkering away on web platforms like Shopify.
                        </p>
                        <p>
                          After working in-house as a Digital Marketer for an
                          online beauty retailer, I now work agency side as a
                          specialist in all thing technical in the world of
                          search and organic discovery.
                        </p>
                        <p>
                          I live in Melbourne, Australia with my beautiful
                          wife, Aki, and I know more about the mechanisms of a
                          good skincare routine than I ever thought I would
                          need - a perk of getting into the beauty and
                          personal care industry.
                        </p>
                        <p>
                          <a href="https://www.innovateonline.com.au/">
                            Innovate Online
                          </a>{" "}
                          is where I do my tech magic thing on a daily basis,
                          helping plan roadmaps, perform migrations and audit
                          crawl traps for our fine clients.
                        </p>
                        <p>
                          Doing SEO in some platforms is hard, but doable, and
                          where would the fun be if you did SEO in easy mode?
                        </p>
                      </div>
                      <div class="column is-2">
                        <img
                          style={imgStyle}
                          src="/img/peter-aki-melbourne-cup.jpg"
                          alt="Peter + Aki"
                        />
                      </div>
                    </div>
                    <PostContent content={content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--gradient">
        <div className="container">
          <div className="">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-4">
                        {heading}
                      </h3>
                      <p>
                        I studied{" "}
                        <a href="https://www.rmit.edu.au/students/student-essentials/program-and-course-information/handbook-program-guides">
                          B. Design Multimedia (Systems) at RMIT
                        </a>{" "}
                        which gave me a broad spectrum of knowledge across
                        design, computer science, engineering and business.
                      </p>
                      <p>
                        Now, I spend my time implementing crawl, indexing and
                        technical search strategies for medium-large businesses – spending a lot of my time in Excel, Screaming Frog and my Code Editor.
                      </p>
                      <p>
                        I get to work on some really cool and interesting
                        things like:
                      </p>

                      <ul style={unstyledList}>
                        <li>
                          <details>
                            <summary>
                              <strong>Custom IA design</strong>
                            </summary>
                            Designing website Information Architecture to
                            improve crawlability as well as discoverability
                            for humans and robots.
                          </details>
                        </li>
                        <li>
                          <details>
                            <summary>Technical SEO Strategy</summary>
                            Maximising organic reach via SEO strategy whilst
                            playing SEO on hard mode with Shopify's
                            limitations
                          </details>
                        </li>
                        <li>
                          Paid amplification with Google Ads, Product Listing
                          Ads and Facebook Audience Engagement
                        </li>
                        <li>
                          Fun with Marketing Automation sequences with Klaviyo
                        </li>
                      </ul>
                      <p>
                        The great thing about our industry is that a Technical
                        Marketing person like me didn't even exist when I
                        started University way back in 2008.
                      </p>
                      <p>
                        The ability to apply my development and analytical
                        skills to a field like marketing is super fun, valued
                        and ever growing.
                      </p>
                    </div>
                  </div>
                  <h3 className="has-text-weight-semibold is-size-4">
                    Stuff that I like and I am really good at
                  </h3>
                  <Features gridItems={intro.blurbs} />
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest blog posts
                    </h3>
                    <BlogRoll />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

IndexPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
