/// <reference types="cypress" />

import { WebDriverUniversity } from "../../support/POM/wdu"

describe('Handle with iFrame and Modals', () => {

    it('Handle webdriveruni iframe and modal', () =>{
        cy.visit('http://www.webdriveruniversity.com/')
        WebDriverUniversity.getIframe().invoke('removeAttr', 'target').click({force:true})

        console.log(WebDriverUniversity.getFrame())
        WebDriverUniversity.getFrame().then($iframe => {
            console.log($iframe)
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        WebDriverUniversity.getAsIframe().find('#button-find-out-more').click()
        
        WebDriverUniversity.getAsIframe().find('#myModal').as('modal')

        WebDriverUniversity.getAsModal().should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity');
        })

        WebDriverUniversity.getAsModal().contains('Close').click()
    })
})