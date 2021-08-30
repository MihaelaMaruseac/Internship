export class WebDriverUniversity{
    static getAlertFromHome(){
        return cy.get('#popup-alerts')
    }

    static getButton1(){
        return cy.get('#button1')
    }

    static getButton4(){
        return cy.get('#button4')
    }

    static alertId(){
        return cy.get('#confirm-alert-text')
    }

    static getIframe(){
        return cy.get('#iframe')
    }

    static getFrame(){
        return cy.get('#frame')
    }

    static getAsIframe(){
        return cy.get('@iframe')
    }

    static getAsModal(){
        return cy.get('@modal')
    }

    static getPageCheckboxes(){
        return cy.get('#dropdown-checkboxes-radiobuttons')
    }

    static getFirstOption(){
        return cy.get('[type="checkbox"][value="option-1"]')
    }

    static getOption3(){
        return cy.get('[type="checkbox"][value="option-3"]')
    }

    static getCheckboxes(){
        return cy.get('input[type="checkbox"]')
    }

    static getRadiobuttons(){
        return cy.get('#radio-buttons')
    }

    static getRadioLettuce(){
        return cy.get("[value='lettuce']")
    }

    static getRadioCabbage(){
        return cy.get("[value='cabbage']")
    }

    static getRadioPumpkin(){
        return cy.get("[value='pumpkin']")
    }

    static getDropDown1(){
        return cy.get('[id="dropdowm-menu-1"]')
    }

    static getDropDown2(){
        return cy.get('[id="dropdowm-menu-2"]')
    }

    static getDropDown3(){
        return cy.get('[id="dropdowm-menu-3"]')
    }

    static getAutocomplete(){
        return cy.get('#autocomplete-textfield')
    }

    static getAutocompleteList(){
        return cy.get('#myInput')
    }

    static getAllAutoList(){
        return cy.get('#myInputautocomplete-list > *')
    }

    static getSubmit(){
       return cy.get('#submit-button')
    }

    static getActions(){
        return cy.get('#actions')
    }

    static getDraggable(){
        return cy.get('#draggable')
    }

    static getDroppable(){
        return cy.get('#droppable')
    }

    static getDoubleClickEl(){
        return cy.get('#double-click')
    }

    static getClickBox(){
        return cy.get('#click-box')
    }
}