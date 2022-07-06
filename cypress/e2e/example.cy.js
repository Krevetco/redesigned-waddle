/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('displays two buttons by default', () => {
        cy.get('.test-buttons-wrapper button').should('have.length', 2)
        cy.get('.test-buttons-wrapper button').first().should('have.text', 'getAxios')
        cy.get('.test-buttons-wrapper button').last().should('have.text', 'deleteData')
        cy.get('.test-output').should('have.length', 1)
        cy.get('.test-output').should('have.text', '')
    })

    it('can get axios data', () => {
        cy.contains('getAxios').click()
        cy.get('.test-output').should('not.have.text', '')
    })

    it('can delete axios data', () => {
        cy.contains('deleteData').click()
        cy.get('.test-output').should('have.text', '')
    })

    it('can save axios data to store', () => {
        let text
        cy.wrap(async () => {
            cy.contains('getAxios').click()
            await cy.get('.test-output').then(($p) => {
                text = $p.text()
            })
            await cy.contains('getAxios').click()
            await cy.get('.test-output').should('have.text', text)
        })
    })
})
