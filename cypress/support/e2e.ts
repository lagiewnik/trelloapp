import '@4tw/cypress-drag-drop';
import 'cypress-file-upload';
import 'cypress-real-events/support';
import '@cypress/code-coverage/support';
import './commands/addBoardApi';
import './commands/addTaskApi';
import './commands/addListApi'

beforeEach(() => {

  Cypress.env('boards', []);
  Cypress.env('lists', []);
  Cypress.env('tasks', []);
  Cypress.env('users', []);

});