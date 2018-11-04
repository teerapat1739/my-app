context('Create New Account page', () => {
    it('go to security page', () => {
        cy.get('.sidebarIconToggle').click()
        cy.get('li').eq(2).click()
     })

     it('Create NewAccount', () => {
        cy.get('input[type="submit"]')
        .contains('Create NewAccount').click();
        cy.get('input[type="email"]')
        .type('taskworld@yopmail.com').should('have.value', 'taskworld@yopmail.com');
        cy.get('input[type="password"]').eq(0)
        .type('cccc').should('have.value', 'cccc');
        cy.get('input[type="password"]').eq(1)
        .type('cccc').should('have.value', 'cccc');
        cy.get('input[type="submit"]')
        .contains('Register').click();
     })
})

