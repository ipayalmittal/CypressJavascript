

describe("Different Screen sizes Test",() =>
    xit("ifferent Screen sizes", () =>{
        cy.visit("https://www.mrbeastburgers.com.au/",{timeout:30000})
        //cy.viewport(640,480)
        cy.viewport('iphone-7')
       cy.get("div[class='hero-order-button'] a").should('be.visible')
        
    })    
)


describe("Different web view Test",() =>{
    Cypress._.each(['samsung-s10','iphone-x','macbook-11'],viewport => {
    it("Different web Screen sizes", () =>{
        cy.visit("https://www.mrbeastburgers.com.au/",{timeout:30000})
        //cy.viewport(640,480)
        cy.viewport('iphone-7')
       cy.get("div[class='hero-order-button'] a").should('be.visible')
        cy.screenshot()
    })    
})
})