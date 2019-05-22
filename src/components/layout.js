import React from "react"
import Nav from "./nav"
import LogoBar from './logoBar'
import Footer from "./footer"

export default ({ children }) => (
    <div>
        <LogoBar />
        <Nav />
        <div className="mobile-container">
            { children }
        </div>
        <Footer />
    </div>
)