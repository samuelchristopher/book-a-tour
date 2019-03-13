import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"

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
        <Home isDisabled={isDisabled} handleInputChange={this.handleInputChange} adults={this.state.adults} children={this.state.children} days={this.state.days}/>
      </Layout>
    )
  }
}

export default Index
