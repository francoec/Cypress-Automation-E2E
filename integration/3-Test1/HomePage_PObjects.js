/// < reference types="cypress" />

import indexPage from '../pages/index'

describe('Home de la page', () =>{
    beforeEach(() => {
        cy.visit('/')
    })

    it('CP01 should filter for motorola', () => {
        cy.title().should('include', 'Internet Fibra, Planes Móviles y Celulares - Movistar Argentina')
        cy.contains('Mi Movistar')
        indexPage.FiltrarMotorola()
        cy.wait(5000)
        /*cy.get('.device-carousel-title > a').click()
        cy.get('#layered-filter-block > .block-title > strong').click()
        cy.get('[attribute="manufacturer"] > .filter-options-content > .items > :nth-child(1) > a').click()*/
    })

    it('CP02 should filter for Samsung', () => {
        indexPage.FiltrarSamsung()
        cy.wait(5000)
    })

    it('CP03 should filter for TCL', () => {
        indexPage.FiltrarTCL()
        cy.wait(5000)
    })

    it('CP04 should filter for Xiaomi', () => {
        indexPage.FiltrarXiaomi()
        cy.wait(5000)
    })

})