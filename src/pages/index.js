import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <h1>winery</h1>
        <p>Welcome to winery! Some tasty wines from LV regions!</p>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <Image/>
        </div>
        <Link to="/about/">About</Link> <br/>
        <Link to="/contacts/">Contacts</Link> <br/>
    </Layout>
);

export default IndexPage
