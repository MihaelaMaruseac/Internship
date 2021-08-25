/// <reference types="cypress" />

import { WebDriverUniversity } from "../../support/POM/wdu"

describe('Handle with checkboxes, radiobuttons', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')
    })

    it('1. Check and validate checkbox', () =>{
        WebDriverUniversity.getPageCheckboxes().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getFirstOption().check()
        WebDriverUniversity.getFirstOption().check().should('be.checked') 
    })

    it('2. Uncheck and validate checkbox', () =>{
        WebDriverUniversity.getPageCheckboxes().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getOption3().uncheck()
        WebDriverUniversity.getOption3().uncheck().should('not.be.checked') 
    })

    it('3. Check and validate multiple checkboxes', () =>{
        WebDriverUniversity.getPageCheckboxes().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getCheckboxes().check(["option-1", "option-2", "option-3", "option-4"])
            .should('be.checked') 
    })

    

})