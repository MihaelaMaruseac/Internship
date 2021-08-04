/// <reference types="cypress" />

describe('Test booking New Delhi City Tour', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
      it('Booking a journey with valid data', () => {
        cy.get(':nth-child(6) > .container-fluid > .row > :nth-child(4) > .featured-image-grid-item > .position-absolute-href').click()
        cy.get('form > .btn').click({force:true})
        cy.get('.form-group > .pure-material-textfield-outlined > span').type('Booking')
        cy.get('.gap-20 > .col-md-6 > .pure-material-textfield-outlined > span').type('Test')
        cy.get('.o2 > .pure-material-textfield-outlined > span').type('bookingtest@gmail.com')
        cy.get(':nth-child(2) > .o1 > .pure-material-textfield-outlined > span').type('bookingtest@gmail.com')
        cy.get(':nth-child(3) > .col-md-12 > .pure-material-textfield-outlined > span').type('040734569010')
        cy.get(':nth-child(4) > .col-md-12 > .pure-material-textfield-outlined > span').type('str ABC')
        cy.get('.chosen-single > span').type('Romania{enter}')
        cy.get(':nth-child(3) > :nth-child(4) > .switch > .slider').click()
        cy.get(':nth-child(25) > .btn').click()
        cy.get('.content > h4').should('contain', 'Your booking status is Unpaid')
        cy.xpath('/html/body/div[2]/div[1]/div[1]/div/div/div[2]/center/button[1]').click()
        cy.get('.success-box > .content').should('contain', 'Your booking status is Reserved')
      })

      it('Booking a journey with empty fields', () => {
        cy.get(':nth-child(6) > .container-fluid > .row > :nth-child(4) > .featured-image-grid-item > .position-absolute-href').click()
        cy.get('form > .btn').click({force:true})
        cy.get(':nth-child(25) > .btn').click()
        cy.get('.result > .alert').should('have.text', 'Email is required\nEmail is required\nFirst Name is required\nLast Name is required\n')
      })

      it('Booking a journey with invalid email address', () => {
        cy.get(':nth-child(6) > .container-fluid > .row > :nth-child(4) > .featured-image-grid-item > .position-absolute-href').click()
        cy.get('form > .btn').click({force:true})
        cy.get('.form-group > .pure-material-textfield-outlined > span').type('Booking')
        cy.get('.gap-20 > .col-md-6 > .pure-material-textfield-outlined > span').type('Test')
        cy.get('.o2 > .pure-material-textfield-outlined > span').type('test')
        cy.get(':nth-child(2) > .o1 > .pure-material-textfield-outlined > span').type('123')
        cy.get(':nth-child(3) > .col-md-12 > .pure-material-textfield-outlined > span').type('040734569010')
        cy.get(':nth-child(4) > .col-md-12 > .pure-material-textfield-outlined > span').type('str ABC')
        cy.get('.chosen-single > span').type('Romania{enter}')
        cy.get(':nth-child(3) > :nth-child(4) > .switch > .slider').click()
        cy.get(':nth-child(25) > .btn').click()
        cy.get('.result > .alert').should('have.text','The Email field must contain a valid email address\nThe Email field must contain a valid email address\n')
      })

      it.only('Booking a journey with invalid confirm email address', () => {
        cy.get(':nth-child(6) > .container-fluid > .row > :nth-child(4) > .featured-image-grid-item > .position-absolute-href').click()
        cy.get('form > .btn').click({force:true})
        cy.get('.form-group > .pure-material-textfield-outlined > span').type('Booking')
        cy.get('.gap-20 > .col-md-6 > .pure-material-textfield-outlined > span').type('Test')
        cy.get('.o2 > .pure-material-textfield-outlined > span').type('bookingtest@gmail.com')
        cy.get(':nth-child(2) > .o1 > .pure-material-textfield-outlined > span').type('test')
        cy.get(':nth-child(3) > .col-md-12 > .pure-material-textfield-outlined > span').type('040734569010')
        cy.get(':nth-child(4) > .col-md-12 > .pure-material-textfield-outlined > span').type('str ABC')
        cy.get('.chosen-single > span').type('Romania{enter}')
        cy.get(':nth-child(3) > :nth-child(4) > .switch > .slider').click()
        cy.get(':nth-child(25) > .btn').click()
        cy.get('.result > .alert').should('have.text','The Email field must contain a valid email address\n')
      })
   
})