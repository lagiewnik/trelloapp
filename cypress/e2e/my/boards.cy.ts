describe('Boards testing', () => {
    beforeEach(() => {
        cy.request('POST', '/reset');

        cy.addBoardApi('new board for stars');
    });

    it('starring the board', () => {
        // not working
        cy.visit('/');

        cy.log('Board created');
        cy.get('[data-cy="board-item"]')
            .should('be.visible')
            .should('have.length', 1);

        cy.log('click on star button')
            .get('.board_item')
            .realHover()
            .get('.Star')
            .click();
    });

    it('should create a new board by intercept from fixture', () => {
        cy.intercept('GET', 'api/boards', { fixture: 'boards' }).as(
            'getBoards'
        );
        cy.visit('/');
    });

    it('should create a new board by intercept from stub const', () => {
        const myStub = [
            {
                name: 'testowy board z intercepta przez const body',
                user: 0,
                id: 5928869338,
                starred: true,
                created: '2023-03-12',
            },
            {
                name: 'Drugi testowy board z intercepta przez const body',
                user: 0,
                id: 5924469338,
                starred: false,
                created: '2023-03-12',
            },
        ];

        cy.intercept('GET', 'api/boards', { body: myStub }).as('getBoards');
        cy.visit('/');
    });

    it('Stub 500 error statusCode', () => {
        cy.intercept('GET', '/api/boards', { statusCode: 500 }).as('getBoards');
        cy.visit('/');
    });

    it('Update board name', () => {
        cy.visit(`/board/${Cypress.env('boards')[0].id}`);
        cy.getById('board-title').clear().type('Updated board name{enter}');
    });

    it.only('add new task', () => {
        cy.addListApi({ title: 'New list', boardIndex: 0 });
        cy.visit(`/board/${Cypress.env('boards')[0].id}`);
        cy.log('Click new task button').getById('new-task').click();
        cy.log('Type task name')
            .getById('task-input')
            .should('be.visible')
            .type('My new test task{enter}');
        cy.log('new task has been craeted')
            .getById('task')
            .should('be.visible');

        cy.log('click created task').getById('task').click({force: true});

        cy.log('verify task details').getById('task-module').should('be.visible');
    });
});
