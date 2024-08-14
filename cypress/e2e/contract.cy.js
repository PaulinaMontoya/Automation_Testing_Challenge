import contractPage from "../support/pages/contract_page";
import { URL } from '../fixtures/data';

describe('Contract section', () => {

  beforeEach(() => {
    cy.visit(URL.CONTRATA_AQUÍ)
    contractPage.contractSection().should('be.visible')
  })

  it('...', () => {

  })


})
