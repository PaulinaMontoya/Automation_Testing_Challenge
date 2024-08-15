import homePage from "../support/pages/home_page"
import contractPage from "../support/pages/contract_page"
import { URL, HOME_PAGE } from '../fixtures/data'

describe('Home section', () => {

  beforeEach(() => {
    cy.visit(URL.INICIO)
  })

  it('Home banner has the expected text', () => {
    homePage.validateTitleTexts()
    homePage.bannerText().should('have.text', HOME_PAGE.TEXT_BANNER)
  })

})
