import contractPage from "../support/pages/contract_page"
import { URL } from '../fixtures/data'

describe('Contract section', () => {

  beforeEach(() => {
    cy.visit(URL.CONTRATA_AQUÍ)
    contractPage.contractSection().should('be.visible')
  })

  it('Fill "Basico" form and contract successfully', () => {
    contractPage.fillCommonInputsForm()
    contractPage.selectBasicoButton()
    contractPage.validateBasicoCard()
    contractPage.validateContracSuccessfully()
  })

  it('Fill "Plus" form and contract  successfully', () => {
    contractPage.fillCommonInputsForm()
    contractPage.selectPlusButton()
    contractPage.validatePlusCard()
    contractPage.validateContracSuccessfully()
  })

  it('Fill "Pro" form and contract  successfully', () => {
    contractPage.fillCommonInputsForm()
    contractPage.selectProButton()
    contractPage.validateProCard()
    contractPage.validateContracSuccessfully()
  })

})
