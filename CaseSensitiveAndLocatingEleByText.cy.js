

describe("different types of logs",() =>
xit("Log types", () =>{
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=common/home",{timeout:30000})
    
        cy.contains("Mega Menu").click()

        //If the click does not work use force click
        cy.contains("AddOns").click({force: true})

        //To match case use 
        cy.contains("My account",{matchCase: true}).click({force: true})        
}), 

//This is the test from LambdaTest.cy.js file - before scenario hook not working but works here
it('Verify Edit your account information on lambda playground',() => {

    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login",{timeout:50000})
    
    cy.get('#input-email').type('restertest@byom.de')
    cy.get('#input-password').type('Get1MillionSubs')
    cy.get("form > .btn").click()  
    cy.get(":nth-child(1) > .card-body > .row > :nth-child(1) > .d-inline-flex").should('be.visible')
    cy.get(":nth-child(1) > .card-body > .row > :nth-child(1) > .d-inline-flex").should('be.visible')
    cy.get(".list-group > [href='https://ecommerce-playground.lambdatest.io/index.php?route=account/logout']",{timeout:50000}).click()
    cy.get(".buttons > .btn").click()    
})
)