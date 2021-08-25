/// <reference types="cypress" />

import { Booking } from "../../support/POM/booking.spec"

describe('Test booking a journey as a Guest', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
      it('Booking a journey with valid data', () => {
        Booking.getDocument().should('have.property', 'charset').and('eq', 'UTF-8')
        Booking.getJourney().click()
       //Booking.changeDate().click({force:true}).type('{selectall}').clear().type('27/08/2021{enter}')
       Booking.changeDate().get('.-bottom-left-:nth-child(1) .datepicker--cell-day:nth-child(27)').click({force:true})
        Booking.getSubmitButton().contains('Book Now').click({force:true})
        // Booking.firstName().click({force:true}).type('Booking')
        Booking.firstName().type('Booking')  
        Booking.lastName().type('Test')
        Booking.email().type('bookingtest@gmail.com')
        Booking.confirmEmail().type('bookingtest@gmail.com')
        Booking.phone().type('040734569010')
        Booking.address().type('str ABC')
        Booking.country().type('Romania{enter}')
        Booking.checkTravelInsurance().click({force:true})
        Booking.getSubmitButton().contains('CONFIRM THIS BOOKING').click()
        // cy.wait(3000)
        Booking.infoHeader().should('contain', 'Your booking status is Unpaid', {timeout: 3000})
        Booking.arrivalPayButton().click()
        Booking.successBox().should('contain', 'Your booking status is Reserved')
      })

      it('Booking a journey with empty fields', () => {
        Booking.getJourney().click()
        Booking.getSubmitButton().contains('Book Now').click({force:true})
        Booking.getSubmitButton().contains('Confirm this booking', { matchCase: false }).click()
        Booking.getAlert().should('have.text', 'Email is required\nEmail is required\nFirst Name is required\nLast Name is required\n')
      })

      it('Booking a journey with invalid email address', () => {
        Booking.getJourney().click()
        Booking.getSubmitButton().contains('Book Now').click({force:true})
        Booking.firstName().type('Booking')
        Booking.lastName().type('Test')
        Booking.email().type('test')
        Booking.confirmEmail().type('123')
        Booking.phone().type('040734569010')
        Booking.address().type('str ABC')
        Booking.country().type('Romania{enter}')
        Booking.checkTravelInsurance().click({force:true})
        Booking.getSubmitButton().contains('CONFIRM THIS BOOKING').click()
        Booking.getAlert().should('have.text','The Email field must contain a valid email address\nThe Email field must contain a valid email address\n')
      })

      it('Booking a journey with invalid confirm email address', () => {
        Booking.getJourney().click()
        Booking.getSubmitButton().contains('Book Now').click({force:true})
        Booking.firstName().type('Booking')
        Booking.lastName().type('Test')
        Booking.email().type('bookingtest@gmail.com')
        Booking.confirmEmail().type('test')
        Booking.phone().type('040734569010')
        Booking.address().type('str ABC')
        Booking.country().type('Romania{enter}')
        Booking.checkTravelInsurance().click({force:true})
        Booking.getSubmitButton().contains('CONFIRM THIS BOOKING').click()
        Booking.getAlert().should('have.text','The Email field must contain a valid email address\n')
      })
   
})