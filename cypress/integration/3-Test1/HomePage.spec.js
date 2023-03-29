describe('Home de la page', () =>{
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/')
    })

    it('CP01 should have a tittle', () => {
        cy.title().should('include', 'Free Range Tester')
    })

})