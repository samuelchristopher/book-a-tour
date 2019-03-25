import React from "react"
import * as emailjs from "emailjs-com"
import { navigate } from "gatsby"


class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            makeBooking: false,
            customerName: '',
            customerEmail: '',
            customerTelephone: '',
            tourDate: ''
        }

        this.toggleMakeBooking = this.toggleMakeBooking.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.confirmBooking = this.confirmBooking.bind(this)
    }

    componentDidMount() {
        emailjs.init('user_muzMftAPWJbly7Twei3ht')
    }

    toggleMakeBooking() {
        let { makeBooking: old } = this.state
        this.setState({
            makeBooking: !old
        })
    }

    sendBookingEmail(tourTitle, tourDate, customerName, customerEmail, customerTelephone) {
        let emailParams = {
            tourTitle,
            customerName,
            customerEmail,
            customerTelephone,
            tourDate
        }
        emailjs.send("gmail", "grace_travel_booking", emailParams)
            .then(res => navigate('/thank-you'), err => console.log(err))
    }

    handleInputChange(e) {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    confirmBooking() {
        let { tourDate, customerName, customerEmail, customerTelephone } = this.state
        let { tourTitle } = this.props
        this.sendBookingEmail(
          tourTitle,
          tourDate,
          customerName,
          customerEmail,
          customerTelephone
        )
    }

    render() {
        return (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <button onClick={this.toggleMakeBooking}>
                {this.state.makeBooking ? "cancel" : "make a booking"}
            </button>
            <div hidden={!this.state.makeBooking}>
                <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <input
                        type="text"
                        name="customerName"
                        placeholder="What is your name?"
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="email"
                        name="customerEmail"
                        placeholder="What is your email?"
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="tel"
                        name="customerTelephone"
                        placeholder="What is your phone number?"
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="date"
                        name="tourDate"
                        placeholder="Preferred tour date"
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.confirmBooking}>confirm booking {">"}</button>
            </div>
            
            </div>
          </div>
        )
    }
}

export default Booking