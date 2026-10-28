import React from "react"
import PropTypes from "prop-types"

// Self-hosted fonts (no requests to Google)
import "@fontsource/mulish/400.css"
import "@fontsource/mulish/500.css"
import "@fontsource/mulish/700.css"
import "@fontsource/catamaran/700.css"
import "@fontsource/mrs-saint-delafield/400.css"

import Header, {Brand} from "./header"
import "./layout.css"

const Layout = ({children, hero, title}) => (
    <>
        <Header overHero={Boolean(hero)}/>
        {hero}
        {title && (
            <div className="page-title">
                <h1>{title}</h1>
            </div>
        )}
        <main id="main">{children}</main>
        <footer className="site-footer">
            <div className="wrap">
                <Brand/>
                <p>The small and craft wineries of Latvia, in one place.</p>
                <p>© 2021 winery.lv</p>
            </div>
        </footer>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    hero: PropTypes.node,
    title: PropTypes.string,
};

export default Layout
