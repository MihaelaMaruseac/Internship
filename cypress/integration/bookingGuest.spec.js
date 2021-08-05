/// <reference types="cypress" />

import { Booking } from "../support/POM/booking.spec"

describe('Test booking a journey as a Guest', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
      it('Booking a journey with valid data', () => {
        Booking.getJourney().click()
        Booking.changeDate().click({force:true}).type('{selectall}').clear().type('27/08/2021{enter}')
        Booking.getSubmitButton().contains('Book Now').click({force:true})
        // Booking.firstName().click({force:true}).type('Booking')
        Booking.firstName().type('Booking')  
        Booking.lastName().click({force:true}).type('Test')
        Booking.email().click({force:true}).type('bookingtest@gmail.com')
        Booking.confirmEmail().click({force:true}).type('bookingtest@gmail.com')
        Booking.phone().click({force:true}).type('040734569010')
        Booking.address().click({force:true}).type('str ABC')
        Booking.country().type('Romania{enter}')
        Booking.checkTravelInsurance().click({force:true})
        Booking.getSubmitButton().contains('CONFIRM THIS BOOKING').click()
        cy.wait(3000)
        Booking.infoHeader().should('contain', 'Your booking status is Unpaid')
        Booking.arrivalPayButton().click()
        Booking.successBox().should('contain', 'Your booking status is Reserved')
      })

      it('Booking a journey with empty fields', () => {
        Booking.getJourney().click()
        Booking.getSubmitButton().contains('Book Now').click({force:true})
        Booking.getSubmitButton().contains('CONFIRM THIS BOOKING').click()
        Booking.getAlert().should('have.text', 'Email is required\nEmail is required\nFirst Name is required\nLast Name is required\n')
      })

      it('Booking a journey with invalid email address', () => {
        Booking.getJourney().click()
        Booking.getSubmitButton().contains('Book Now').click({force:true})
        Booking.firstName().type('Booking')
        Booking.lastName().click({force:true}).type('Test')
        Booking.email().click({force:true}).type('test')
        Booking.confirmEmail().click({force:true}).type('123')
        Booking.phone().click({force:true}).type('040734569010')
        Booking.address().click({force:true}).type('str ABC')
        Booking.country().type('Romania{enter}')
        Booking.checkTravelInsurance().click({force:true})
        Booking.getSubmitButton().contains('CONFIRM THIS BOOKING').click()
        Booking.getAlert().should('have.text','The Email field must contain a valid email address\nThe Email field must contain a valid email address\n')
      })

      it('Booking a journey with invalid confirm email address', () => {
        Booking.getJourney().click()
        Booking.getSubmitButton().contains('Book Now').click({force:true})
        Booking.firstName().type('Booking')
        Booking.lastName().click({force:true}).type('Test')
        Booking.email().click({force:true}).type('bookingtest@gmail.com')
        Booking.confirmEmail().click({force:true}).type('test')
        Booking.phone().click({force:true}).type('040734569010')
        Booking.address().click({force:true}).type('str ABC')
        Booking.country().type('Romania{enter}')
        Booking.checkTravelInsurance().click({force:true})
        Booking.getSubmitButton().contains('CONFIRM THIS BOOKING').click()
        Booking.getAlert().should('have.text','The Email field must contain a valid email address\n')
      })
   
})