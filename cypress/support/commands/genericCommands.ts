Cypress.Commands.add(
    'getById',
    { prevSubject: 'optional' },
    (subject, id) => {
      if (subject) {
        return cy.wrap(subject).find(`[data-cy="${id}"]`)
      }
      return cy.get(`[data-cy="${id}"]`)
    },
  );