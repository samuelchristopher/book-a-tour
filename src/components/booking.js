import React from "react"
import * as emailjs from "emailjs-com"
import { navigate } from "gatsby"
// import * as firebase from "firebase"
// import "firebase/database"


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
        this.addToFirebase = this.addToFirebase.bind(this)
    }

    componentDidMount() {
        emailjs.init('user_muzMftAPWJbly7Twei3ht')
        // let config = {
        //     apiKey: "AIzaSyB1x4Xulggn_lzxi1JEveDF7jjohoU_wFs",
        //     authDomain: "gtabook.firebaseapp.com",
        //     databaseURL: "https://gtabook.firebaseio.com",
        //     projectId: "gtabook",
        //     storageBucket: "gtabook.appspot.com",
        //     messagingSenderId: "242321135368"
        // }
        // firebase.initializeApp(config)
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
        this.addToFirebase(
            tourTitle,
            tourDate,
            customerName,
            customerEmail,
            customerTelephone
        )
        emailjs.send("gmail", "grace_travel_booking", emailParams)
            .then(res => navigate('/thank-you'), err => console.log(err))
    }

    handleInputChange(e) {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    addToFirebase(tourTitle, tourDate, customerName, customerEmail, customerTelephone) {
        let newBooking = {
            tourTitle,
            customerName,
            customerEmail,
            customerTelephone,
            tourDate,
        }
        // let date = new Date()
        console.log(newBooking)
        // let dateRef = firebase.database().ref(`/bookings/${date.toDateString()}`)
        // dateRef.push(newBooking)
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
            {/* <div hidden={!this.state.makeBooking}>
                <form name="contact" method="POST" data-netlify="true" style={{ display: 'flex', flexDirection: 'column' }} >
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
                    <button type="submit">confirm booking {">"}</button>
                </form>
            
            </div> */}
          </div>
        </div>
        )
    }
}

export default Booking