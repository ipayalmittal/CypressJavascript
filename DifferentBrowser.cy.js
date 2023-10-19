describe("Automation in testing site",() =>
//The tests need to be restarted
    xit("Run in chrome",{browser:"chrome"}, () =>{
        cy.visit("https://automationintesting.online/",{timeout:30000})
    }),
    
    xit("Run in chrome",{browser:"!chrome"}, () =>{
        cy.visit("https://automationintesting.online/",{timeout:30000})
    }),

    it("Run in chrome",{browser:"edge"}, () =>{
        cy.visit("https://automationintesting.online/",{timeout:30000})
    })  

    //We do not have firefox on cypress yet
   /*  xit("Run in chrome",{browser:"firefox"}, () =>{
        cy.visit("https://automationintesting.online/",{timeout:30000})
    }), */
    )
    