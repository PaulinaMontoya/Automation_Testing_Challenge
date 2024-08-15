import membershipPage from "../support/pages/membership_page"
import contractPage from "../support/pages/contract_page"
import { URL, MEMBERSHIP_PAGE } from '../fixtures/data'

describe('Membership section', () => {

  beforeEach(() => {
    cy.visit(URL.MEMBRESIAS)
  })

  it('Membership section has the expected text', () => {
    membershipPage.membershipTitle().should('have.text', MEMBERSHIP_PAGE.TITLE)
    membershipPage.membershipText().should('have.text', MEMBERSHIP_PAGE.TEXT)
  })

  it('Expected membership cards prices', () => {
    membershipPage.membershipCards().should('have.length', 3)
    membershipPage.validateBasicMembershipData()
    membershipPage.validatePlusMembershipData()
    membershipPage.validateProMembershipData()
  })

  it('Tenku Basico "contratar" button works as expected', () => {
    membershipPage.basicoContratarButton().click()
    contractPage.validateBasicoCard()
  })

  it('Tenku Plus "contratar" button works as expected', () => {
    membershipPage.plusContratarButton().click()    
    contractPage.validatePlusCard()
  })

  it('Tenku Pro "contratar" button works as expected', () => {
    membershipPage.proContratarButton().click()    
    contractPage.validateProCard()
  })

})
