import Button from "./Button";

function AlunoRow({
  aluno,
  onEditar,
  onExcluir
}) {
  return (
    <tr>

      <td>
        {aluno.foto ? (
          <img
            src={aluno.foto}
            alt={aluno.nome}
            className="foto-aluno"
          />
        ) : (
          <div className="sem-foto">
            👤
          </div>
        )}
      </td>

      <td>
        {aluno.nome}
      </td>

      <td>
        {aluno.email}
      </td>

      <td>
        {aluno.idade}
      </td>

      <td>
        {aluno.curso}
      </td>

      <td>
        <div className="acoes">

          {/* EDITAR */}
          <Button
            variant="secondary"
            onClick={() => onEditar(aluno)}
          >
            ✏️ Editar
          </Button>

          {/* EXCLUIR */}
          <Button
            variant="danger"
            onClick={() => onExcluir(aluno.id)}
          >
            🗑️ Excluir
          </Button>

        </div>
      </td>

    </tr>
  );
}

export default AlunoRow;