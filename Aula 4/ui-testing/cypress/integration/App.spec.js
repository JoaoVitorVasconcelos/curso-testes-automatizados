/// <reference types="cypress"/>
import field from '../support/field'
describe('App Developers Skills', () => {

    beforeEach(() => {
        cy.acessarSite()
    });

    it('should load skills list as the button is clicked', () => {
        cy.get(field.BOTTON.addSkills).click()
        cy.get('li').should('be.visible')
        cy.get('ul').should('be.visible')
    });

    it('Verificando os titulos',()=>{
        cy.get(field.TITLE.developersApp).should('have.text','Developers App')
        cy.get(field.TITLE.skillName).should('have.text','Skill Name')
        cy.get(field.TITLE.developers).should('have.text','Developers')
        cy.get(field.TITLE.technologies).should('have.text','Technologies')
        cy.get(field.TITLE.roles).should('have.text','Roles')
    })

    it('verificando se os textos dos campos de textos',()=>{
        cy.get(field.TEXT.skillNameText)
            .type('teste')
            .should('have.value','teste')
        cy.get(field.TEXT.developersText)
            .type('teste')
            .should('have.value','teste')
        cy.get(field.TEXT.technologiesText)
            .type('teste')
            .should('have.value','teste')
        cy.get(field.TEXT.rolesText)
            .type('teste')
            .should('have.value','teste')
    })

    it('Verificações no botão Add Skills',()=>{
        cy.get(field.BOTTON.addSkills).should('be.visible')
        cy.get(field.BOTTON.addSkills).should('have.text','Add Skills')
        cy.get(field.BOTTON.addSkills).click()
    })
});