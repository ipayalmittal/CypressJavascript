import {faker} from '@faker-js/faker';

const name = faker.person.firstName()
const email = faker.internet.email()
const phone = faker.phone.number()
const subject = faker.lorem.words()
const description = faker.lorem.lines()

describe("Print data using faker",() =>
//If you want to skip or run only specific test, cypress has it.skip, it.only
    xit("Data generation using Faker", () =>{
        cy.log(`email: ${email}`)
        cy.log(`name: ${name}`)
    })
   )

describe("Autoamtion in testing site",() =>
    it.skip("Fill form", () =>{
        cy.visit("https://automationintesting.online/",{timeout:30000})
        cy.get("#name").type(name)
        cy.get("#email").type(email)
        cy.get("#phone").type(phone)
        cy.get("#subject").type(subject)
        cy.get("#description").type(description)
        cy.get("#submitContact").click()
        cy.get(":nth-child(2) > div > h2").contains("Thanks for getting in touch")        
    }),
    
    
    it.only("Use faker generated data without defining const", () =>{
        cy.visit("https://automationintesting.online/",{timeout:30000})
        cy.get("#name").type(faker.person.firstName())
        cy.get("#email").type(faker.internet.email())
        cy.get("#phone").type(faker.phone.number())
        cy.get("#subject").type(faker.lorem.words())
        cy.get("#description").type(faker.lorem.lines())
        cy.get("#submitContact").click()
        cy.get(":nth-child(2) > div > h2").contains("Thanks for getting in touch")        
    })   
)