describe("Sistema de Gestão de Alunos", () => {
  it("Deve abrir a página inicial", () => {

    cy.visit("http://localhost:5173");

    cy.contains("Cadastro de Alunos")
      .should("be.visible");
  });
});
