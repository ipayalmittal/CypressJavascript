
describe("Dynamic loading wait test",() =>
    xit("Wait for text to appear", () =>{
        //To increase the loading time of website go to settings, where tests run and from there copy "efaultCommandTimeout: 6000"
        //from project settings, copy this in "cypress.config.js" file, this will set wait time on project level.You don't have to 
        //write wait in your code then.
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1",{timeout:30000})
        cy.get("button").click()
        cy.get("#finish > h4").should('be.visible')      
    })     

    )