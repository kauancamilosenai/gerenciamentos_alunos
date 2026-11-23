describe("atividade keliven", () => {
    //etapa 1
    it("CT01 - Verificação dos alunos cadastrados", () => {
        cy.visit("http://localhost:5173/")

        //verifica a listagem de alunos
        cy.contains("Alunos cadastrados").should("be.visible")
        
        //verifica se algum aluno cadastrado está visivel
        cy.contains('Ana Souza').should("be.visible")
        //verificando se o email está apresentado
        cy.contains('ana@email.com').should("be.visible")
    })
    
    it("CT02 - Verificar um novo aluno na listagem", () => {
        // 1 acessa o sistema
        cy.visit("http://localhost:5173/")
        
        // 2 cadastra um novo aluno com dados válidos
        cy.get('input[name="nome"]').type("Silabas Nabola")
        cy.get('input[name="email"]').type("silabasnabola@email.com")
        cy.get('input[name="idade"]').type("26")
        cy.get('select[name="curso"]').select("Administração")
        
        // 3 localiza a listagem de alunos
        cy.contains("Alunos cadastrados").should("be.visible")
        
        // 4 verifica se o nome aparece
        cy.get('input[name="nome"]').should("have.value" , "Silabas Nabola")

        // 5 verifica se o email corresponde
        cy.get('input[name="email"]').should("have.value" , "silabasnabola@email.com")

        // cadastra de verdade
        cy.contains("button", "Cadastrar aluno").click()
    })

    //etapa 2
    it("CT03 - Cadastrar uma nota válida", () => {
        // 1 acessa o sistema
        cy.visit("http://localhost:5173/")

        // 2 localiza o formulário de cadastro de novas
        cy.contains('📝 Lançamento de notas').should("be.visible")
        
        // 3 Selecionar um aluno cadastrado.
        cy.get('select[name="alunoId"]').select("Mariana Oliveira")
        
        // 4 Informar o nome da avaliação.
        cy.get('input[name="avaliacao"]').type("Prova 1")
        
        // 5 Informar a nota 8.5.
        cy.get('input[name="nota"]').type("8.5")
        
        // 6 Clicar no botão de cadastrar/salvar nota.
        cy.contains("button", "📝 Lançar nota").click()
    })

    it("verificar nota da mariana", () => {
        cy.visit("http://localhost:5173/")
        
        cy.contains("tr","Ana Souza" && "Prova 1").should("be.visible")
        //verificar as notas dentro dessa linha (outro dado)
        .within(() => {
            cy.contains("8.5").should("be.visible")
        })

    })

    it("teste de nota inválida",() => {
        cy.visit("http://localhost:5173/")

        cy.contains('📝 Lançamento de notas').should("be.visible")
        
        cy.get('select[name="alunoId"]').select("Mariana Oliveira")
        
        cy.get('input[name="avaliacao"]').type("Prova 1")
        
        cy.get('input[name="nota"]').type("11.5")

        cy.contains("button", "📝 Lançar nota").click()
    })

    it("editar nota cadastrada",() => {
       cy.visit("http://localhost:5173/")

        cy.contains("tr","Ana Souza" && "Prova 1").should("be.visible")
        //verificar as notas dentro dessa linha (outro dado)
        .within(() => {
            cy.contains("8.5").should("be.visible")
        })
        .within(() => {
            cy.contains("button", "Editar").click()
        })

        cy.contains("tr","Ana Souza" && "Prova 1").should("be.visible")
        //verificar as notas dentro dessa linha (outro dado)
        .within(() => {
            cy.get("input").clear()
            cy.get("input").type("10")
            cy.contains("button", "Salvar").click()
        })
        
        cy.contains("tr","Ana Souza" && "Prova 1").should("be.visible")
        //verificar as notas dentro dessa linha (outro dado)
        .within(() => {
            cy.contains("10").should("be.visible")
        })
    })
})