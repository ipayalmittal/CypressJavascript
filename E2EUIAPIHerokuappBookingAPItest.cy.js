describe("Booking API Testing",() =>
it("API testing with Cypress", () =>
{
    //You can define baseUrl in cypress.config.js and in this file just "/"
    //cy.visit("/",{timeout:30000})
    //or use env variable
    cy.visit(Cypress.env("frontend_url"),{timeout:30000})
    cy.get("#name").type("Sally")
    cy.get("#email").type("Abc@gmail.com")
    cy.get("#phone").type("12345678912")
    cy.get("#subject").type("Regarding room")
    cy.get("#description").type("Test test nbvnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
    cy.get("#submitContact").click()
    cy.get(":nth-child(2) > div > h2").should("have.text","Thanks for getting in touch Abc!")
}),


it("Another API testing with Cypress", () =>
{
    //Instead of this we can define variable like "api-url" in "cypress.config.js"
    //cy.request({url:'https://restful-booker.herokuapp.com/booking?firstname=Sally'})
    cy.request({url:Cypress.env("api_url")})    
    .then((response)=>
    {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.not.be.null
    }
    )       
})
)