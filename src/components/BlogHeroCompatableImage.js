import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const BlogHeroCompatibleImage = ({ imageInfo }) => {
  const {childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img src={image} alt="hi" /> 
    )
  }

  if (!!childImageSharp) {
    return      <Img src={image} alt="hi" /> 

  }

  if (!!image && typeof image === 'string')
    return       <Img src={image} alt="hi" /> 


  return null
}

BlogHeroCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default BlogHeroCompatibleImage
