

describe("API test",() =>
    it("Chuck Norris API test", () =>{
        cy.request("https://api.chucknorris.io/jokes/random",{timeout:30000}).as('joke')
       
        cy.get('@joke').should((response) => {
            console.log(response.body.value)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration').lessThan(100) //Passes
            expect(response).to.have.property('duration').lessThan(20) //Fails
        })
    })    
)