describe("Lambda test",() =>
//BEFORE EACH HOOK NOT WORKING 
/* beforeEach(() => {
    
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login",{timeout:30000})           
        cy.get('#input-email').type('restertest@byom.de')
        cy.get('#input-password').type('Get1MillionSubs')
        cy.get("form > .btn").click()
}), 

xit('Verify Edit your account information on lambda playground',() => {
            cy.get(":nth-child(1) > .card-body > .row > :nth-child(1) > .d-inline-flex").should('be.visible')
            cy.get(".list-group > [href='https://ecommerce-playground.lambdatest.io/index.php?route=account/logout']",{timeout:50000}).click()
            cy.get(".buttons > .btn").click() 
}),   

xit('Verify Order history on lambda playground',() => {
    cy.get(".list-group > [href='https://ecommerce-playground.lambdatest.io/index.php?route=account/order']").click()
    cy.get(".page-title").should('have.text','Order History')
})   ,  */

it('Verify Edit your account information on lambda playground',() => {

    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login",{timeout:50000})
    
    cy.get('#input-email').type('restertest@byom.de')
    cy.get('#input-password').type('Get1MillionSubs')
    cy.get("form > .btn").click()  
    cy.get(":nth-child(1) > .card-body > .row > :nth-child(1) > .d-inline-flex").should('be.visible')
    cy.get(".list-group > [href='https://ecommerce-playground.lambdatest.io/index.php?route=account/logout']",{timeout:50000}).click()
    cy.get(".buttons > .btn").click()    
}),

it('Verify Edit your account information on lambda playground using ENV variables from json file',() => {

    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login",{timeout:50000})
    
    cy.get('#input-email').type(Cypress.env('user-name'))
    //{log:false} will hide password in logs
    //To hide password being types on website use environment variables, in the above test, password is hidden too even though env variable not used
    cy.get('#input-password').type(Cypress.env('user-password'),{log:false})
    cy.get("form > .btn").click()  
    cy.get(":nth-child(1) > .card-body > .row > :nth-child(1) > .d-inline-flex").should('be.visible')
    cy.get(".list-group > [href='https://ecommerce-playground.lambdatest.io/index.php?route=account/logout']",{timeout:50000}).click()
    cy.get(".buttons > .btn").click()    
})

)