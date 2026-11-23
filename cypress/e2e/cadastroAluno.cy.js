describe("cadastro de alunos", () => {
    it("Deve cadastrar o aluno", () => {
        //acessa o sistema ⬇
        cy.visit("http://localhost:5173/")

        //verificar o titulo do usuario
        cy.contains("Novo aluno").should("be.visible")

        //preencher os campos ⬇
        cy.get('input[name="nome"]').type("Silabas Nabola")

        cy.get('input[name="email"]').type("silabasnabola@email.com")

        cy.get('input[name="idade"]').type("26")
        
        cy.get('select[name="curso"]').select("Administração")
        
        //verificar se os campos foram preenchidos corretamente
        cy.get('input[name="nome"]').should("have.value" , "Silabas Nabola")
        cy.get('input[name="email"]').should("have.value" , "silabasnabola@email.com")
        cy.get('input[name="idade"]').should("have.value" , "26")
        cy.get('select[name="curso"]').should("have.value" , "Administração")

        cy.contains("button", "Cadastrar aluno").click()

        //verificar o titulo do usuario
        cy.contains("Novo aluno").should("be.visible")

        //preencher os campos ⬇
        cy.get('input[name="nome"]').type("Kauan Nabola")

        cy.get('input[name="email"]').type("kauannabola@email.com")

        cy.get('input[name="idade"]').type("67")
        
        cy.get('select[name="curso"]').select("Multimídia")
        
        //verificar se os campos foram preenchidos corretamente
        cy.get('input[name="nome"]').should("have.value" , "Kauan Nabola")
        cy.get('input[name="email"]').should("have.value" , "kauannabola@email.com")
        cy.get('input[name="idade"]').should("have.value" , "67")
        cy.get('select[name="curso"]').should("have.value" , "Multimídia")

        cy.contains("button", "Cadastrar aluno").click()
        //fim cadastro 2 alunos

        //começo adição de notas
    })
})