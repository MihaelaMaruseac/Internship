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

    it('4. Check and validate specific radiobutton', () =>{
        WebDriverUniversity.getPageCheckboxes().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getRadiobuttons().find("[type='radio']").first().check()
        WebDriverUniversity.getRadiobuttons().find("[type='radio']").eq(1).check()

        WebDriverUniversity.getRadiobuttons().find("[type='radio']").first().check().should('be.checked') 
    })

    it('5. Validate the state of specific radiobutton', () =>{
        WebDriverUniversity.getPageCheckboxes().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getRadioLettuce().should('not.be.checked')
        WebDriverUniversity.getRadioCabbage().should('not.be.checked')
        WebDriverUniversity.getRadioPumpkin().should('be.checked')

        WebDriverUniversity.getRadioLettuce().check()
        WebDriverUniversity.getRadioLettuce().should('be.checked')
        WebDriverUniversity.getRadioPumpkin().should('not.be.checked')

        WebDriverUniversity.getRadioCabbage().should('be.disabled')
    })

    it('6. Select specific values from dropdown lists', () =>{
        WebDriverUniversity.getPageCheckboxes().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getDropDown1().select('c#')
        WebDriverUniversity.getDropDown2().select('testng').should('have.value', 'testng')
        WebDriverUniversity.getDropDown3().select('jquery').contains('JQuery')
    })

    it('7. Select specific prod via autocomplete list', () =>{
        WebDriverUniversity.getAutocomplete().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getAutocompleteList().type('C')
        WebDriverUniversity.getAllAutoList().each(($el, index, $list) =>{
            const prod = $el.text()
            const productToSelect = 'Carrot'

            if(prod === productToSelect){
                $el.click()

                WebDriverUniversity.getSubmit().click()
                cy.url().should('include', productToSelect)
            }
        }).then(() =>{
            WebDriverUniversity.getAutocompleteList().clear().type('G')
            WebDriverUniversity.getAllAutoList().each(($el, index, $list) =>{
            const prod = $el.text()
            const productToSelect = 'Grapes'

            if(prod === productToSelect){
                $el.click()

                WebDriverUniversity.getSubmit().click()
                cy.url().should('include', productToSelect)
            }
            })
        })
    })

})