 class indexPage{
    constructor(){
      this.VerMas = '.device-carousel-title > a';
      this.FiltrarPor = '#layered-filter-block > .block-title > strong';
      this.Motorola = '[attribute="manufacturer"] > .filter-options-content > .items > :nth-child(1) > a';
      this.Samsung = '[attribute="manufacturer"] > .filter-options-content > .items > :nth-child(2) > a';
      this.TCL = '[attribute="manufacturer"] > .filter-options-content > .items > :nth-child(3) > a';
      this.Xiaomi = '[attribute="manufacturer"] > .filter-options-content > .items > :nth-child(4) > a';
    }

    FiltrarMotorola = () =>{
        cy.get(this.VerMas).click();
        cy.get(this.FiltrarPor).click();
        cy.get(this.Motorola).click();
    }

    FiltrarSamsung = () =>{
      cy.get(this.VerMas).click();
      cy.get(this.FiltrarPor).click();
      cy.get(this.Samsung).click();
    }

    FiltrarTCL = () =>{
      cy.get(this.VerMas).click();
      cy.get(this.FiltrarPor).click();
      cy.get(this.TCL).click();
    }

    FiltrarXiaomi = () =>{
      cy.get(this.VerMas).click();
      cy.get(this.FiltrarPor).click();
      cy.get(this.Xiaomi).click();
    }

 }
 export default new indexPage