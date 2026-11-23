import { useState } from "react";
import "./App.css"
import Header from "./components/Header";
import AlunoForm from "./components/AlunoForm";
import AlunoTable from "./components/AlunoTable";
import BuscaAluno from "./components/BuscaAluno";
import NotaForm from "./components/NotaForm";
import NotaTable from "./components/NotaTable";

// ======================================================
// ESTADO INICIAL DO FORMULÁRIO DE ALUNO
// ======================================================

const alunoInicial = {
  nome: "",
  email: "",
  idade: "",
  curso: "",
  foto: "",
};

function App() {
  // ======================================================
  // ESTADOS
  // ======================================================

  const [aluno, setAluno] = useState(alunoInicial);

  const [alunoEditando, setAlunoEditando] = useState(null);

  const [busca, setBusca] = useState("");

  const [alunos, setAlunos] = useState([
    {
      id: 1,
      nome: "Ana Souza",
      email: "ana@email.com",
      idade: 17,
      curso: "Desenvolvimento de Sistemas",
      foto: "",
    },
    {
      id: 2,
      nome: "Lucas Martins",
      email: "lucas@email.com",
      idade: 19,
      curso: "Multimídia",
      foto: "",
    },
    {
      id: 3,
      nome: "Mariana Oliveira",
      email: "mariana@email.com",
      idade: 18,
      curso: "Administração",
      foto: "",
    },
  ]);

  const [notas, setNotas] = useState([
    {
      id: 1,
      alunoId: 1,
      avaliacao: "Prova 1",
      nota: 8.5,
    },
    {
      id: 2,
      alunoId: 2,
      avaliacao: "Prova 1",
      nota: 7,
    },
  ]);

  // ======================================================
  // ALTERAÇÃO DOS CAMPOS DO ALUNO
  // ======================================================

  function handleChange(event) {
    const { name, value } = event.target;

    setAluno((alunoAtual) => ({
      ...alunoAtual,
      [name]: value,
    }));
  }

  // ======================================================
  // UPLOAD DA FOTO
  // ======================================================

  function atualizarFoto(foto) {
    setAluno((alunoAtual) => ({
      ...alunoAtual,
      foto: foto,
    }));
  }

  // ======================================================
  // CADASTRAR OU EDITAR ALUNO
  // ======================================================

  function salvarAluno(event) {
    event.preventDefault();

    // Algumas validações estão propositalmente incompletas.
    // Os estudantes deverão identificar os problemas
    // por meio dos casos de teste.

    if (aluno.nome.trim() === "") {
      alert("Informe o nome do aluno.");
      return;
    }

    if (aluno.curso === "") {
      alert("Selecione um curso.");
      return;
    }

    // ------------------------------------------------------
    // EDIÇÃO
    // ------------------------------------------------------

    if (alunoEditando !== null) {
      const alunosAtualizados = alunos.map((item) =>
        item.id === alunoEditando
          ? {
              ...item,
              ...aluno,
            }
          : item
      );

      setAlunos(alunosAtualizados);

      setAlunoEditando(null);

      alert("Aluno atualizado com sucesso!");
    }

    // ------------------------------------------------------
    // CADASTRO
    // ------------------------------------------------------

    else {
      const novoAluno = {
        id: Date.now(),
        ...aluno,
      };

      setAlunos((listaAtual) => [
        ...listaAtual,
        novoAluno,
      ]);

      alert("Aluno cadastrado com sucesso!");
    }

    setAluno(alunoInicial);
  }

  // ======================================================
  // SELECIONAR ALUNO PARA EDIÇÃO
  // ======================================================

  function editarAluno(alunoSelecionado) {
    setAluno({
      nome: alunoSelecionado.nome,
      email: alunoSelecionado.email,
      idade: alunoSelecionado.idade,
      curso: alunoSelecionado.curso,
      foto: alunoSelecionado.foto || "",
    });

    setAlunoEditando(alunoSelecionado.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // ======================================================
  // CANCELAR EDIÇÃO
  // ======================================================

  function cancelarEdicao() {
    setAluno(alunoInicial);
    setAlunoEditando(null);
  }

  // ======================================================
  // EXCLUIR ALUNO
  // ======================================================

  function excluirAluno(id) {
    const confirmar = window.confirm(
      "Deseja realmente excluir este aluno?"
    );

    if (!confirmar) {
      return;
    }

    const novaLista = alunos.filter(
      (aluno) => aluno.id !== id
    );

    setAlunos(novaLista);

    // Remove também as notas vinculadas ao aluno.
    setNotas((notasAtuais) =>
      notasAtuais.filter(
        (nota) => nota.alunoId !== id
      )
    );
  }

  // ======================================================
  // BUSCA DE ALUNOS
  // ======================================================

  const alunosFiltrados = alunos.filter((aluno) => {
    const termo = busca.toLowerCase();

    // A busca está funcionando apenas pelo nome.
    // Isso pode ser explorado posteriormente nos testes.

    return aluno.nome
      .toLowerCase()
      .includes(termo);
  });

  // ======================================================
  // LANÇAMENTO DE NOTA
  // ======================================================

  function salvarNota(novaNota) {
  const novaNotaCompleta = {
    id: Date.now(),
    alunoId: Number(novaNota.alunoId),
    avaliacao: novaNota.avaliacao,
    nota: Number(novaNota.nota),
  };

  setNotas((notasAtuais) => [
    ...notasAtuais,
    novaNotaCompleta,
  ]);

  alert("Nota lançada com sucesso!");
}

  // ======================================================
  // EDITAR NOTA
  // ======================================================

  function editarNota(id, novoValor) {
    // Também não existe validação de 0 a 10 aqui
    // propositalmente.

    const notasAtualizadas = notas.map(
      (nota) =>
        nota.id === id
          ? {
              ...nota,
              nota: Number(novoValor),
            }
          : nota
    );

    setNotas(notasAtualizadas);

    alert("Nota atualizada!");
  }

  // ======================================================
  // EXCLUIR NOTA
  // ======================================================

  function excluirNota(id) {
    const confirmar = window.confirm(
      "Deseja excluir esta nota?"
    );

    if (!confirmar) {
      return;
    }

    setNotas((notasAtuais) =>
      notasAtuais.filter(
        (nota) => nota.id !== id
      )
    );
  }

  // ======================================================
  // INTERFACE
  // ======================================================

  return (
    <>
      <Header />

      <main className="container">

        {/* ============================================= */}
        {/* CADASTRO / EDIÇÃO DE ALUNO */}
        {/* ============================================= */}

        <AlunoForm
          aluno={aluno}
          alunoEditando={alunoEditando}
          onChange={handleChange}
          onFotoChange={atualizarFoto}
          onSubmit={salvarAluno}
          onCancelar={cancelarEdicao}
        />

        {/* ============================================= */}
        {/* BUSCA */}
        {/* ============================================= */}

        <BuscaAluno
          busca={busca}
          onChange={setBusca}
        />

        {/* ============================================= */}
        {/* LISTAGEM DE ALUNOS */}
        {/* ============================================= */}

        <AlunoTable
          alunos={alunosFiltrados}
          onEditar={editarAluno}
          onExcluir={excluirAluno}
        />

        {/* ============================================= */}
        {/* LANÇAMENTO DE NOTAS */}
        {/* ============================================= */}

        <NotaForm
          alunos={alunos}
          onSalvar={salvarNota}
        />

        {/* ============================================= */}
        {/* LISTAGEM / EDIÇÃO DE NOTAS */}
        {/* ============================================= */}

        <NotaTable
          notas={notas}
          alunos={alunos}
          onEditar={editarNota}
          onExcluir={excluirNota}
        />

      </main>
    </>
  );
}

export default App;
