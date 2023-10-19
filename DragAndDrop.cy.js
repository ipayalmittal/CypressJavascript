describe('Drap drop Test', function()
{
   xit('Drag and drop',function()
    {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")

        cy.get('#column-a').drag('#column-b')
    })


    it('Drag and drop using costume drop to function',function()
    {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")

        cy.get('#column-a').dragTo('#column-b')
    })
})