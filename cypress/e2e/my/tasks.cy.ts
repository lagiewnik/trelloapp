describe('Tasks behaviour', () => {
    beforeEach(() => {
        cy.request('POST', '/api/reset');
        cy.intercept('POST','**/api/tasks').as('createTask').intercept('DELETE', '**/api/tasks/*').as('deleteTask');
        cy.addBoardApi('hello board');
        cy.addListApi({title: 'hello list'});


    });

    it('drag a task to another list', ()=>{
        cy.log('start')
        cy.addListApi({title: "another list"}).addTaskApi({title:"New task"});
        cy.visit(`/board/${Cypress.env('boards')[0].id}`);

        cy.get('.List_tasks').eq(1).as('secondList')

        cy.get('.Task').drag('@secondList')
    })

    it.only('upload file to the task', () => {
        cy.addTaskApi({title:"New task"});
        cy.visit(`/board/${Cypress.env('boards')[0].id}`);
        cy.get('.Task').click();
        cy.get('[type="file"]').attachFile("cypressLogo.png")
    });
});