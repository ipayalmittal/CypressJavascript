describe("Air bnb success API Testing",() =>
    it("Airbnb API testing with Cypress", () =>
    {        
        cy.request({url:'http://www.airbnb.de/'}),
        {
            headers:{
                "Accept":"application/json, text/plain, */*",
                "User-Agent": "axios/0.18.0"
            }
        }
    })
)

//Below test gives 403
describe("Air bnb 403 API Testing",() =>
    it("Airbnb API testing with Cypress", () =>
    {
        cy.request({url:'https://www.airbnb.de/'}).then((response)=>
        {
            expect(response.status).to.equal(200)
            expect(response).to.have.property('headers')
        })
    })
)