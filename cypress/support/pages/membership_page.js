import { MEMBERSHIP_PAGE, IMG } from '../../fixtures/data'

export class MembershipPage {

    constructor() {
        this.membershipTitle = () => cy.get('.chakra-text.css-1twmq9i')
        this.membershipText = () => cy.get('.chakra-text.css-1fjd8bi')
        this.membershipCards = () => cy.get('.css-uzw7nb')
        
        //Tenku paquete básico elementos
        this.basicoCard = () => cy.get('[class="css-j7qwjs"]').contains('30,000')
        this.basicoImage = () => cy.get('[src="images/plans/basic/logo.png"]')
        this.basicoPrice = () => cy.get('.chakra-text.css-1yu5fq0').contains(MEMBERSHIP_PAGE.BASIC_PRICE)
        //Xpaths to validate basico card elements
        this.basicoAccidentePrice = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[1]/div[2]/div[1]/p[1]')
        this.basicoPerdidasPrice = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[1]/div[2]/div[1]/p[3]')
        this.basicoSeguroVidaPrice = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[1]/div[2]/div[1]/p[5]')
        this.basicoContratarButton = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[1]/div[2]/div[2]/button')

        //Tenku paquete plus elementos
        this.plusImage = () => cy.get('[src="images/plans/plus/logo.png"]')
        this.plusPrice = () => cy.get('.chakra-text.css-1yu5fq0').contains(MEMBERSHIP_PAGE.PLUS_PRICE)
        this.plusDetailsAndBenefits = () => cy.get('.chakra-text.css-1qtkq1l').contains('50,000')
        //Xpaths to validate plus card elements
        this.plusAccidentePrice = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[2]/div[2]/div[1]/p[1]')
        this.plusPerdidasPrice = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[2]/div[2]/div[1]/p[3]')
        this.plusSeguroVidaPrice = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[2]/div[2]/div[1]/p[5]')
        this.plusContratarButton = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[2]/div[2]/div[2]/button')

        //Tenku paquete pro elementos
        this.proImage = () => cy.get('[src="images/plans/pro/logo.png"]')
        this.proPrice = () => cy.get('.chakra-text.css-1yu5fq0').contains(MEMBERSHIP_PAGE.PRO_PRICE)
        this.proDetailsAndBenefits = () => cy.get('.chakra-text.css-1qtkq1l').contains('100,000')
        //Xpaths to validate pro card elements
        this.proAccidentePrice = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[3]/div[2]/div[1]/p[1]')
        this.proPerdidasPrice = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[3]/div[2]/div[1]/p[3]')
        this.proSeguroVidaPrice = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[3]/div[2]/div[1]/p[5]')
        this.proContratarButton = () => cy.xpath('//*[@id="membership"]/div/div/div/div/div[3]/div[2]/div[2]/button')
    }

    validateBasicMembershipData() {
        this.basicoImage().should('have.attr', 'src', IMG.BASICO)
        this.basicoPrice().should('be.visible')
        this.basicoAccidentePrice().contains(MEMBERSHIP_PAGE.BASIC_ACCDIENTES)
        this.basicoPerdidasPrice().contains(MEMBERSHIP_PAGE.BASIC_PERDIDAS)
        this.basicoSeguroVidaPrice().contains(MEMBERSHIP_PAGE.BASIC_SEGURO_VIDA)
    }

    validatePlusMembershipData() {
        this.plusImage().should('have.attr', 'src', IMG.PLUS)
        this.plusPrice().should('be.visible')
        this.plusAccidentePrice().contains(MEMBERSHIP_PAGE.PLUS_ACCDIENTES)
        this.plusPerdidasPrice().contains(MEMBERSHIP_PAGE.PLUS_PERDIDAS)
        this.plusSeguroVidaPrice().contains(MEMBERSHIP_PAGE.PLUS_SEGURO_VIDA)
    }

    validateProMembershipData() {
        this.proImage().should('have.attr', 'src', IMG.PRO)
        this.proPrice().should('be.visible')
        this.proAccidentePrice().contains(MEMBERSHIP_PAGE.PRO_ACCDIENTES)
        this.proPerdidasPrice().contains(MEMBERSHIP_PAGE.PRO_PERDIDAS)
        this.proSeguroVidaPrice().contains(MEMBERSHIP_PAGE.PRO_SEGURO_VIDA)
    }
}

export default new MembershipPage()
