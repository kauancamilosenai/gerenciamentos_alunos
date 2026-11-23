import AlunoRow from "./AlunoRow";

function AlunoTable({
  alunos,
  onEditar,
  onExcluir
}) {
  return (
    <section className="table-card">

      <div className="table-header">
        <div>
          <h2>Alunos cadastrados</h2>
          <p>{alunos.length} aluno(s)</p>
        </div>
      </div>

      {alunos.length === 0 ? (
        <div className="empty-state">
          Nenhum aluno encontrado.
        </div>
      ) : (
        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Foto</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Idade</th>
                <th>Curso</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>

              {alunos.map((aluno) => (
                <AlunoRow
                  key={aluno.id}
                  aluno={aluno}
                  onEditar={onEditar}
                  onExcluir={onExcluir}
                />
              ))}

            </tbody>

          </table>

        </div>
      )}

    </section>
  );
}

export default AlunoTable;