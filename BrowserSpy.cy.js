describe("Automation in testing site",() =>
    it("Fill form", () =>{

        cy.visit("https://browserspy.dk/date.php",{timeout:30000})
    }),
    
    it("Fill form", () =>{
        //future date
        const time = new Date(Date.UTC(2023,10,16)).getTime()

        cy.clock(time)
        cy.visit("https://browserspy.dk/date.php",{timeout:30000})
    }) 
    )