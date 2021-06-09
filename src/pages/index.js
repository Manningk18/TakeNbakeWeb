import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/aboutHome"
import Steps from "../components/steps"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <About/>
    <Steps/>
  </Layout>
)

export default IndexPage
