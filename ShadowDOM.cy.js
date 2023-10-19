describe("Shadow dom test",()=>{
    it("Shadow dom test", () =>{

        cy.visit("https://www.lambdatest.com/selenium-playground/shadow-dom",{timeout:30000})

        cy.get('shadow-signup-form').shadow().find("[name='username']").type('Subscribe to channel')  
    })

    it("Shadow dom test", () =>{

        cy.visit("https://www.lambdatest.com/selenium-playground/shadow-dom",{timeout:30000})

        cy.get("[name='username']").type('Subscribe to channel')  
    })
})