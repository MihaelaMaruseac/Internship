/// <reference types="cypress" />

import { Contact } from "../../support/POM/contactUsAts"

describe('Tests', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    })

 it('1. Check & Validate Contact us functionality and navigating in browser', () =>{
    Contact.getContact().click()
    Contact.getFName().type('Test 1')
    Contact.getEmail().type('emailAddress@yahoo.com')
    Contact.getBox().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    Contact.getSubmit().click()
    Contact.url().should('include', 'contact')
    Contact.getConfirm().should('contain','Your enquiry has been successfully sent to the store owner!')
    
    cy.go("back")
    cy.reload()
    Contact.url().should('include', 'https://automationteststore.com/index.php?rt=content/contact')
    // cy.reload(true)//reload without using cache

    cy.go('forward')
    Contact.url().should('include', 'succes')

})

})