describe('Hooks', () => {
    before(() => {
        cy.log("texxxxt")
    })

    after(() => {
        cy.log("texxxxt")
    })

    beforeEach(() => {
        cy.log("texxxxt")
    })

    afterEach(() => {
        cy.log("texxxxt")
    })

    it("Exemple 1", () => {
        cy.log("Ex 1")
    })

    it("Exemple 2", () => {
        cy.log("Ex 2")
    })
})