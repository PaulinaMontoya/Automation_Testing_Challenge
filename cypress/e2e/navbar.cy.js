import commonPage from "../support/pages/common_page";
import { URL } from '../fixtures/data';

describe('Test Navbar Options', () => {

  beforeEach(() => {
    cy.visit('/')
    commonPage.logoImage().should('be.visible')
  })

  it('Navbar INICIO option is working as expected', () => {
    commonPage.inicioButton().should('be.visible').click()
    cy.url().should('include', URL.INICIO);
  })

  it('Navbar DESCUBRE TENKU option is working as expected', () => {
    commonPage.descubreTenkuButton().should('be.visible').click()
    cy.url().should('include', URL.DESCUBRE_TENKU);
  })

  it('Navbar MEMBRESÍAS option is working as expected', () => {
    commonPage.membresiasButton().should('be.visible').click()
    cy.url().should('include', URL.MEMBRESIAS);
  })

  it('Navbar CONTRATA AQUÍ option is working as expected', () => {
    commonPage.contrataAquiButton().should('be.visible').click()
    cy.url().should('include', URL.CONTRATA_AQUÍ);
  })

})
