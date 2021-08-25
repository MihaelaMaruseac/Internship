/// <reference types="cypress" />

import { WebDriverUniversity } from "../../support/POM/wdu"

describe('Handle js alerts', () => {

    it('1. Confirm js alert contains the correct text', () =>{
        cy.visit('http://www.webdriveruniversity.com/')
        WebDriverUniversity.getAlertFromHome().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getButton1().click()

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('I am an alert box!')
        })
    })

    it('2. Validate js confirm alert box works correct when clicking OK', () =>{
        cy.visit('http://www.webdriveruniversity.com/')
        WebDriverUniversity.getAlertFromHome().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getButton4().click()

        cy.on('window:confirm', (str) =>{
            return true;
        })

        WebDriverUniversity.alertId().contains('You pressed OK')
    })

    it('3. Validate js confirm alert box works correct when clicking Cancel', () =>{
        cy.visit('http://www.webdriveruniversity.com/')
        WebDriverUniversity.getAlertFromHome().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getButton4().click()

        cy.on('window:confirm', (str) =>{
            return false;
        })

        WebDriverUniversity.alertId().contains('You pressed Cancel!')
    })

    it('4. Validate js confirm alert box using a stub', () =>{
        cy.visit('http://www.webdriveruniversity.com/')
        WebDriverUniversity.getAlertFromHome().invoke('removeAttr', 'target').click({force:true})

        const stub = cy.stub()
        cy.on('window:confirm', stub)

        WebDriverUniversity.getButton4().click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() =>{
            return true
        }).then(() =>{
            WebDriverUniversity.alertId().contains('You pressed OK')
        })


    })
})


