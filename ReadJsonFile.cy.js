

describe("Read json data",function(){
    it("Read and display json data",function(){
        cy.fixture('testData').then(Shinobi =>{
            expect(Shinobi['name']).to.eq("Sally")
        })
    })
})