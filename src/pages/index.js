import React from "react"
import Layout from "../components/layout"
// import Home from "../components/home"
// import Results from "../components/results"
import AllTours from "../components/allTours"
import { Helmet } from "react-helmet"

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      adults: 0,
      children: 0,
      days: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
    
  }

  render() {
    let { adults, children, days } = this.state
    const isDisabled = !adults || !children || !days
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tours | Grace Travel</title>
        </Helmet>
        {/* <Home isDisabled={isDisabled} handleInputChange={this.handleInputChange} adults={this.state.adults} children={this.state.children} days={this.state.days}/> */}
        {/* <Results days={ days }/> */}
        <AllTours />
      </Layout>
    )
  }
}

export default Index
