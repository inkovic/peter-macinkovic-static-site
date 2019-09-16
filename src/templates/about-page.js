import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Helmet from 'react-helmet'
import peterAvatar from '../img/peter-macinkovic.jpg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'
import mediumLogo from '../img/social/medium.svg'
import theLoop from '../img/social/the-loop.svg'
import crunchbase from '../img/social/crunchbase.svg'
import github from '../img/github-icon.svg'
import producthunt from '../img/social/product-hunt.svg'
import slideshare from '../img/social/slideshare.svg'
import webmaster from '../img/social/webmasters-stackexchange.svg'
import codepen from '../img/social/codepen.svg'
import deviantart from '../img/social/deviantart.svg'
import drupal from '../img/social/drupal.svg'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const AboutSchema = <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "type": "AboutPage",
    "name": "About Peter Macinkovic",
    "description": "Spending a few years as a Digital Project Manager for a couple of web agencies, Peter Macinkovic has seen a variety of businesses thrive (and fail) in their pursuit to succeed online. Now discovering his  true calling in Digital Marketing and Search Engine Optimisation, Peter Macinkovic spends his time implementing marketing and technology strategies for Online Retail in the Beauty sector – helping Kiana Beauty Melbourne grow into uncharted waters.",
    "mainEntityOfPage": "https://peter.macinkovic.id.au/about",
    "url": "https://peter.macinkovic.id.au/about/",
    "image": "https://peter.macinkovic.id.au/img/peter-macinkovic.jpg",
    "sameAs": ["https://www.linkedin.com/in/inkovic/","https://twitter.com/inkovic","https://instagram.com/inkovic","https://facebook.com/inkovic","https://www.slideshare.net/PeterMacinkovic","https://webmasters.stackexchange.com/users/49404/inkovic","https://medium.com/@inkovic","https://www.theloop.com.au/inkovic/portfolio/Marketer/Melbourne","https://www.crunchbase.com/person/peter-macinkovic","https://github.com/inkovic","https://www.producthunt.com/@peter_macinkovic","https://codepen.io/inkovic/","https://www.deviantart.com/inkovic","https://www.drupal.org/u/inkovic"],
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": ".about-peter-macinkovic"
    },
      "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://peter.macinkovic.id.au/img/peter-macinkovic.jpg",
      "representativeOfPage": "https://schema.org/True"
    },
    "mainEntity":{
      "@type": "Person",
      "name": "Peter Macinkovic",
      "givenName": "Peter",
      "familyName": "Macinkovic",
      "url": "https://peter.macinkovic.id.au/about/",
      "mainEntityOfPage": "https://peter.macinkovic.id.au/about/",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Royal Melbourne Institute of Technology",
        "url":"https://www.rmit.edu.au/",
        "mainEntityOfPage": "https://www.rmit.edu.au/",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU",
          "addressLocality": "Melbourne",
          "addressRegion": "Victoria",
          "postalCode": "3000",
          "streetAddress": "124 La Trobe St",
        },
      },
      "knowsAbout": ["SEO", "Shopify", "eCommerce", "Javascript", "HTML", "ReactJS", "schema.org"],
      "award": ["Blue Drop Awards - Best Entertainment Website 2014 (Nominee)", "Golden Key Recipeint - 2009"],
      "jobTitle": "Digital Marketing Manager",
      "honorificPrefix": "Mr",
      "birthDate": "1989-08-11",
      "birthPlace": "Dandenong, Victoria",
      "gender": "Male",
      "nationality": "Australia",
      "parent": ["Celerina Willer", "Jozo Macinkovic"],
      "sibling": "Ivan Macinkovic",
      "spouse": "Liqin Zhuang",
      "memberOf": [{
        "@type": "Organization",
        "name": "RMITV",
        "mainEntityOfPage": "https://www.rmitv.org/",
        "url": "https://www.rmitv.org/",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU",
          "addressLocality": "Melbourne",
          "addressRegion": "Victoria",
          "postalCode": "3000",
          "streetAddress": "Room 97, Level 3, Building 12 RMIT University City Campus",
        },
      }],
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Kiana Beauty Melbourne",
        "mainEntityOfPage": "https://www.kianabeauty.com.au",
        "url": "https://www.kianabeauty.com.au",
        "image": "https://cdn.shopify.com/s/files/1/0540/9841/t/85/assets/logo.png",
        "telephone": "(03) 9707 1555",
        "priceRange": "$2.95 AUD - $1,600 AUD",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "51 High St",
          "addressLocality": "Berwick",
          "postalCode": "3806",
          "addressCountry": "Australia",
        },
      },
      "hasOccupation": {
        "@type": "Occupation",
        "@id": "https://peter.macinkovic.id.au/about#digital-marketing-manager",
        "name": "Technical SEO Strategist",
        "description": "Specialist in Technical Aspects of Search Engine Optimisation.",
        "estimatedSalary": {
          "@type": "MonetaryAmountDistribution",
          "name": "120,000",
          "unitText": "YEAR",
          "currency": "AUD",
          "duration": "1Y",
          "percentile10": 56108,
          "percentile25": 65000,
          "median": 77615,
          "percentile75": 95000,
          "percentile90": 150781,
          "sameAs": "https://www.payscale.com/research/AU/Job=Digital_Marketing_Manager/Salary/dd808b93/Melbourne",
        },
        "url": "https://peter.macinkovic.id.au/about#digital-marketing-manager",  
        "occupationLocation": {
          "@type": "City",
          "name": "Melbourne",
        },
        "educationRequirements": "Undergraduate",
        "experienceRequirements": "5+ Years of Digital Marketing or Web Development Experience",
        "occupationalCategory": "15-1199.10",
        "qualifications": ["Bachelor Degree", "Google Analytics Certification", "Google Ads Certification"],
        "skills": ["SEO", "Google Ads", "Google Analytics", "Marketing Automation", "Data Analysis", "Front End Web Design", "Shopify Liquid Programming"],
        "responsibilities": ["Analyse Traffic", "Optimise Website Conversion", "Drive Traffic", "Optimise for Search Engine Visibility", "Report to Stakeholders", "Manage Campaigns"],
      },
    },
    "breadcrumb":
      {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
          "item": {
            "@type": "ListItem",
              "@id":  `https://peter.macinkovic.id.au`,
              "name": "Peter Macinkovic"
            }
        },{
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": `https://peter.macinkovic.id.au/about`,
          "name": "About"
        }
      }]
      },
  })}</script>
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <main className="about-peter-macinkovic section content">
              <Helmet title="About Peter Macinkovic | eCommerce SEO Specialist" description="Peter Macinkovic is an eCommerce SEO Specialist and Digital Marketer based in Melbourne, Australia. Workign on the web since 2011." />
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <h2 id="what-am-i-all-about"><a href="#what-am-i-all-about" aria-label="what am i all about permalink" class="anchor"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What am I all about</h2>
              <div className="columns multiline">
                <div className="column is-10">
                <p>Spending a few years as a Digital Project Manager for a couple of web agencies, I have seen a variety of businesses thrive (and fail) in their pursuit to succeed online.</p>
                <p>Now discovering my true calling in Digital Marketing and Search Engine Optimisation, I spend my time implementing marketing and technology strategies for Online Retail in the Beauty sector – helping <a href="https://kianabeauty.com.au">Kiana Beauty Melbourne</a> grow into uncharted waters.</p>
                </div>
                <div className="column auto">
                  <img src={peterAvatar} alt="Peter Macinkovic" style={{borderRadius: "50%"}} />
                </div>
              </div>
              <PageContent
              content={content}
              />
              <Helmet>
              {AboutSchema}
              </Helmet>
              <ul className="social-list">
                <li><a href="https://www.linkedin.com/in/inkovic/">
              <object type="image/svg+xml" className="social-svg" data={linkedin}>
              </object> LinkedIn</a></li>
                <li><a title="twitter" href="https://twitter.com/inkovic">
                  <object type="image/svg+xml" className="social-svg" data={twitter}>
                  </object> Twitter</a>
                </li>
                <li><a title="instagram" href="https://instagram.com/inkovic">
                  <object type="image/svg+xml" className="social-svg" data={instagram}>
                  </object> Instagram</a>
                </li>
                <li><a title="facebook" href="https://facebook.com/inkovic">
                  <object type="image/svg+xml" className="social-svg" data={facebook}>
                  </object> Facebook</a>
                </li>
                <li><a title="Slideshare" href="https://www.slideshare.net/PeterMacinkovic">
                <object type="image/svg+xml" className="social-svg" data={slideshare}>
                </object> Slideshare</a>
                </li>
                <li><a title="Webmaster Stackexchange" href="https://webmasters.stackexchange.com/users/49404/inkovic">
                <object type="image/svg+xml" className="social-svg" data={webmaster}>
                </object> Webmaster StackExchange</a>
                </li>
                <li><a title="Medium" href="https://medium.com/@inkovic">
                  <object type="image/svg+xml" className="social-svg" data={mediumLogo}>
                  </object> Medium</a>
                </li>
                <li><a title="The Loop" href="https://www.theloop.com.au/inkovic/portfolio/Marketer/Melbourne">
                <object type="image/svg+xml" className="social-svg" data={theLoop}>
                </object> The Loop</a>
              </li>
              <li><a title="Crunchbase" href="https://www.crunchbase.com/person/peter-macinkovic">
              <object type="image/svg+xml" className="social-svg" data={crunchbase}>
              </object> Crunchbase</a>
              </li>
              <li><a title="Github" href="https://github.com/inkovic">
              <object type="image/svg+xml" className="social-svg" data={github}>
              </object> Github</a>
              </li>
              <li><a title="Product Hunt" href="https://www.producthunt.com/@peter_macinkovic">
              <object type="image/svg+xml" className="social-svg" data={producthunt}>
              </object> Product Hunt</a>
              </li>
              <li><a title="Codepen" href="https://codepen.io/inkovic/">
              <object type="image/svg+xml" className="social-svg" data={codepen}>
              </object> Codepen</a>
              </li>
              <li><a title="DeviantArt" href="https://www.deviantart.com/inkovic">
              <object type="image/svg+xml" className="social-svg" data={deviantart}>
              </object> DeviantArt</a>
              </li>
              <li><a title="Drupal" href="https://www.drupal.org/u/inkovic">
              <object type="image/svg+xml" className="social-svg" data={drupal}>
              </object> Drupal</a>
              </li>
              </ul>
            </main>
          </div>
        </div>  
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
