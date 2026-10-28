import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout title="Page not found">
        <section className="section">
            <div className="wrap page-body">
                <p>This page doesn&#39;t exist.</p>
                <Link to="/">Back to the winery list</Link>
            </div>
        </section>
    </Layout>
);

export const Head = () => (
    <SEO title="Page not found" pathname="/404/">
        <meta name="robots" content="noindex"/>
    </SEO>
);

export default NotFoundPage
