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
}