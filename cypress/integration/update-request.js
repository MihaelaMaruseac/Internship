/// <reference types="cypress" />

describe("UPDATE req", () => {

    it("Update an existent post via /posts api", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2",
            body: {
                title: "Updated",
                author: "Timmie"
            }
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
})