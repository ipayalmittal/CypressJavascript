//import userdata from '../fixtures/testData.json'

describe("Automation in testing site",function () {
    before(function (){
        cy.fixture('testData').then(function(testData){
            this.testData = testData

        //cy.fixture('testData').then(testData =>{
        //expect(testData['name']).to.eq("Sally")
        })
    })

    it("Fill form", function () {
        cy.fixture('testData').then(testData =>{
        cy.visit("https://automationintesting.online/",{timeout:30000})
        cy.get("#name").type(testData['name'])
        cy.get("#email").type(testData['email'])
        cy.get("#phone").type(testData['phone'])
        cy.get("#subject").type("Regarding room")
        cy.get("#description").type("Test test nbvnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
        cy.get("#submitContact").click()
        //cy.get(":nth-child(2) > div > h2").should("have.text","Thanks for getting in touch Abc!")     
    })
    })      
})


