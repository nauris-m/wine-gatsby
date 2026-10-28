/**
 * Page <head> tags. Render it from a page's exported `Head` function.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"

function SEO({description = ``, lang = `en`, pathname = `/`, title, children}) {
    const {site} = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
          }
        }
      }
    `
    );

    const {siteUrl} = site.siteMetadata;
    const metaDescription = description || site.siteMetadata.description;
    const fullTitle = `${title} | ${site.siteMetadata.title}`;
    const url = `${siteUrl}${pathname}`;
    const image = `${siteUrl}${site.siteMetadata.image}`;

    return (
        <>
            <html lang={lang}/>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription}/>
            <link rel="canonical" href={url}/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content={site.siteMetadata.title}/>
            <meta property="og:title" content={fullTitle}/>
            <meta property="og:description" content={metaDescription}/>
            <meta property="og:url" content={url}/>
            <meta property="og:image" content={image}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="theme-color" content="#0d0d0c"/>
            {children}
        </>
    )
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    pathname: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default SEO
