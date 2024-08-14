import homePage from "../support/pages/home_page";
import { URL } from '../fixtures/data';

describe('Home section', () => {

  beforeEach(() => {
    cy.visit(URL.INICIO)
    homePage.homeSection().should('be.visible')
  })

  it('Banner has expected text', () => {

  })

  it('Banner has expected image', () => {

  })

  it('Button "CONTRATA AQUÍ" sends to expected section', () => {

  })

})
