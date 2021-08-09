export class General{
    static getHeader(){
        return cy.get('.demo')
    }
    static getHomeText(){
        return cy.get('[title="home"]')
    }
    static getFirstJourney(){
        return cy.get('div[class="col"]')
    }
    static getNile(){
        return cy.get('a[href*="Spectaculars-Of-The-Nile"]')
    }

    static geth2(){
        return cy.get('h2.float-none').contains('Featured Tours', { matchCase: false })
    }
}