/// <reference types="cypress" />

describe("POST, Get, DELETE req", () => {
    var comments = new Array()
    let comm = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1)
    let id = Math.floor(Math.random() * 100 +1)
    var result
    it("Create a new comment", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/comments",
            body: {
                body: comm,
                postId: id
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    })

    it("Locate and assert the new comment", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/comments",
            headers:{
                accept: "application/json"
            }
        }).then(response =>{
            let body= JSON.parse(JSON.stringify(response.body))
            body.forEach(function(item){
                comments.push(item["body"])
            })
        }).then(() => {
            var latestCom = comments [comments.length - 1]
            expect(latestCom).to.eq(comm)
        })
    })

    it("Delete the new comment", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/comments/"+ comments.length
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
})