context('General page', () => {
    it('Change data', () => {
        cy.get('select').select('english')
        cy.get('select').select('thai')
        cy.get('select').select('korean')
        cy.get('input[type="submit"]')
        .contains('SaveChanges').click();
    })
})