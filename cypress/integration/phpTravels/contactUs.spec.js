/// <reference types="cypress" />

import { Contact } from "../../support/POM/contact.spec"

describe('Tests based on Udemy course', ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Test Contact Us form with valid data', ()=>{
        Contact.goToContact().click()
        Contact.getName().type('Test')
        Contact.getEmail().type('test@gmail.com')
        Contact.getSubject().type('Info Rentals')
        Contact.getMessage().type('Lorem ipsum dolor sit amet')
    })
})