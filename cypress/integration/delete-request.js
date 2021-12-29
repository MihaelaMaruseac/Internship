/// <reference types="cypress" />

describe("DELETE req", () => {

    it("Delete a post via /posts api", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/6"
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
})