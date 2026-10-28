import React from "react"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import WineryList from "../components/winery-list"
import Ornament from "../components/ornament"
import SEO from "../components/seo"
import wineries from "../data/wineries.json"

const regionCount = new Set(wineries.map(b => b.region)).size;

const Hero = () => (
    <section className="hero">
        <StaticImage
            className="hero-image"
            src="../images/wines.jpg"
            alt=""
            layout="fullWidth"
            placeholder="blurred"
        />
        <div className="hero-content">
            <span className="script">A toast from Latvia</span>
            <h1>Latvian <span className="accent">Craft Wineries</span></h1>
            <p>
                The small fruit, berry and grape wineries of Latvia gathered in one place,
                with addresses and websites.
            </p>
            <ul className="hero-stats">
                <li><strong>{wineries.length}</strong><span>Wineries</span></li>
                <li><strong>{regionCount}</strong><span>Regions</span></li>
            </ul>
        </div>
    </section>
);

const IndexPage = () => (
    <Layout hero={<Hero/>}>
        <section className="section" id="wineries">
            <div className="wrap">
                <div className="section-head">
                    <Ornament/>
                    <span className="script">from every corner of Latvia</span>
                    <h2>Find a <span className="accent">winery</span></h2>
                </div>
                <WineryList wineries={wineries}/>
            </div>
        </section>
    </Layout>
);

const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latvian craft wineries",
    numberOfItems: wineries.length,
    itemListElement: wineries.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
            "@type": "Winery",
            name: b.name,
            address: {"@type": "PostalAddress", streetAddress: b.address, addressLocality: b.city, addressCountry: "LV"},
            geo: {"@type": "GeoCoordinates", latitude: b.lat, longitude: b.lng},
            ...(b.website && {url: b.website}),
            ...(b.founded && {foundingDate: String(b.founded)}),
        },
    })),
};

export const Head = () => (
    <SEO title="Latvian craft wineries">
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </SEO>
);

export default IndexPage
