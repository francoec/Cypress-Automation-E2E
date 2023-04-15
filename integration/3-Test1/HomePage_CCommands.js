describe('Home de la page', () =>{
    beforeEach(() => {
        cy.visit('https://www.movistar.com.ar/')
    })

    it('CP', () => {
        cy.get('.device-carousel-title > a').click()
        cy.get('#layered-filter-block > .block-title > strong').click()
        cy.get('[attribute="manufacturer"] > .filter-options-content > .items > :nth-child(1) > a').click()
    })

    
})