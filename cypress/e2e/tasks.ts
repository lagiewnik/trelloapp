describe('Tasks verify', () => {
    
    beforeEach(() => {
        cy.request("POST", "api/reset");

        cy.intercept('POST','**/api/tasks').as('createTask').intercept('DELETE','**/api/tasks/*').as('deleteTask')
    });
});