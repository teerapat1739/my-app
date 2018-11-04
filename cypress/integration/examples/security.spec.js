context('Security page', () => {
    it('go to security page', () => {
       cy.get('.sidebarIconToggle').click()
       cy.get('li').eq(1).click()

    })

    it('input password', () => {
        cy.get('input[type="password"]').eq(0)
        .type('bbbb').should('have.value', 'bbbb');
        cy.get('input[type="password"]').eq(1)
        .type('cccc').should('have.value', 'cccc');
        cy.get('input[type="password"]').eq(2)
        .type('cccc').should('have.value', 'cccc');
     })

     it('save password and login again', () => {
        cy.get('input[type="submit"]')
        .contains('Save').click();
        cy.get('input[type="email"]')
        .type('game@yopmail.com').should('have.value', 'game@yopmail.com');
        cy.get('input[type="password"]')
        .type('cccc').should('have.value', 'cccc');
        cy.get('input[type="submit"]')
        .contains('Login').click();
     })

     it('Delete Account', () => {
        cy.get('input[type="submit"]')
        .contains('Delete this Account').click();
     })
})