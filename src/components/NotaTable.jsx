import NotaRow from "./NotaRow";

function NotaTable({
  notas,
  alunos,
  onEditar,
}) {
  return (
    <section className="table-card">

      <h2>Notas lançadas</h2>

      <table>
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Avaliação</th>
            <th>Nota</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {notas.map((nota) => {

            const aluno = alunos.find(
              (item) =>
                item.id === nota.alunoId
            );

            return (
              <NotaRow
                key={nota.id}
                nota={nota}
                aluno={aluno}
                onEditar={onEditar}
              />
            );
          })}
        </tbody>
      </table>

    </section>
  );
}

export default NotaTable;