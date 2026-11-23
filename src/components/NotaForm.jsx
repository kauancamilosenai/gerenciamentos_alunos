import { useState } from "react";
import Button from "./Button";

const notaInicial = {
  alunoId: "",
  avaliacao: "",
  nota: "",
};

function NotaForm({ alunos, onSalvar }) {
  const [formNota, setFormNota] = useState(notaInicial);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormNota((estadoAtual) => ({
      ...estadoAtual,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formNota.alunoId === "") {
      alert("Selecione um aluno.");
      return;
    }

    if (formNota.avaliacao.trim() === "") {
      alert("Informe o nome da avaliação.");
      return;
    }

    if (formNota.nota === "") {
      alert("Informe a nota.");
      return;
    }

    onSalvar({
      alunoId: Number(formNota.alunoId),
      avaliacao: formNota.avaliacao,
      nota: Number(formNota.nota),
    });

    // Limpa somente depois de salvar
    setFormNota(notaInicial);
  }

  return (
    <section className="form-card">

      <div className="table-header">
        <div>
          <h2>📝 Lançamento de notas</h2>
          <p>
            Selecione um aluno e registre sua avaliação.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          {/* ALUNO */}
          <div className="form-group">
            <label htmlFor="alunoId">
              Aluno
            </label>

            <select
              id="alunoId"
              name="alunoId"
              value={formNota.alunoId}
              onChange={handleChange}
            >
              <option value="">
                Selecione um aluno...
              </option>

              {alunos.map((aluno) => (
                <option
                  key={aluno.id}
                  value={aluno.id}
                >
                  {aluno.nome}
                </option>
              ))}

            </select>
          </div>

          {/* AVALIAÇÃO */}
          <div className="form-group">
            <label htmlFor="avaliacao">
              Avaliação
            </label>

            <input
              id="avaliacao"
              name="avaliacao"
              type="text"
              value={formNota.avaliacao}
              onChange={handleChange}
              placeholder="Ex.: Prova 1"
            />
          </div>

          {/* NOTA */}
          <div className="form-group">
            <label htmlFor="nota">
              Nota
            </label>

            <input
              id="nota"
              name="nota"
              type="number"
              step="0.1"
              value={formNota.nota}
              onChange={handleChange}
              placeholder="Ex.: 8.5"
            />
          </div>

        </div>

        <Button type="submit">
          📝 Lançar nota
        </Button>

      </form>

    </section>
  );
}

export default NotaForm;