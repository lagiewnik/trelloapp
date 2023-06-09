declare namespace Cypress {
  interface Chainable {

    /**
     * create new board via API
    */
    addBoardApi(value: string): Chainable<Element>

    /**
     * create new board via UI
    */
    addBoardUi(value: string): Chainable<Element>

    /**
     * create new board
     * @param value title of board
     * @example
     * cy.addBoard("testowy board")
    */
    addBoard(value: string): void

    /**
     * Adds new list via API and saves it to env
    */
    addListApi(options: {
      title: string;
      boardIndex?: number;
    }): Chainable<Element>

    /**
     * create new task via API
    */
    addTaskApi(options: {
      title: string;
      boardIndex?: number;
      listIndex?: number;
    }): Chainable<Element>

    /**
     * deletes a board via API
    */
    deleteBoardApi(options?: {
      id: number;
    }): Chainable<Element>


    /**
     * Deletes new list via API
    */
    deleteListApi(index: number): Chainable<Element>

    /**
     * renames new list via API
    */
    renameListApi(options: {
      title: string;
      id?: number;
    }): Chainable<Element>

    /**
     * reorders list via API
    */
    reorderListApi(options: {
      order: number;
      index?: number;
    }): Chainable<Element>

    /**
     * signup via API
    */
    signupApi(options: {
      email: string;
      password: string;
    }): Chainable<Element>

    /**
     * updtates a board via API
    */
    updateBoardApi(options: {
      name: string;
      id?: number;
    }): Chainable<Element>

    /**
     * get element by data-cy attribute
     */
    getById(id: string): Chainable<Element>
  }
}