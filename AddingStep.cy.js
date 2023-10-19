//https://www.cypress.io/blog/2023/03/08/test-isolation-as-a-best-practice/

describe("Adding steps",() =>
    xit("Adding steps to scenario run", () =>{
        //cy.step("Login")
        cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo",{timeout:30000})

        //cy.step("Entering Data")
        cy.get("#sum1").type('10')
        cy.get("#sum2").type('15')
        cy.get("#gettotal > .bg-lambda-900").click()
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#addmessage').should('be.visible');
        /* ==== End Cypress Studio ==== */
}),

xit("Writing script using testing library of cypress", () =>{

        cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo",{timeout:30000})

        //cy.get("#user-message").type('test')
        cy.findAllByPlaceholderText("Please enter your Message").type("Payal Mittal")
        }),

        it("Writing script using testing library of cypress fill form and submit", () =>{

        cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo",{timeout:30000})

        cy.findAllByAltText("Logo").click()
        //cy.get("#user-message").type('test')
        cy.findAllByRole("button",{name: /Submit/i}).click()
}),

//Cypress recorder from html
//https://www.youtube.com/watch?v=TzpCi2xVDvc&list=PLNQq42pqd-rzeW-w40zJDRtqFA-NQnxPl&index=44

xit("Click on Lambda test Logo", () =>{

        cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo",{timeout:30000})

        cy.findAllByAltText("Logo").click()    
    })   
    
)