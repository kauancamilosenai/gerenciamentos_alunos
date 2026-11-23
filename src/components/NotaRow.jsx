import { useState } from "react";
import Button from "./Button";

function NotaRow({
  nota,
  aluno,
  onEditar,
}) {
  const [editando, setEditando] =
    useState(false);

  const [valor, setValor] =
    useState(nota.nota);

  function salvar() {
    onEditar(nota.id, valor);
    setEditando(false);
  }

  return (
    <tr>
      <td>{aluno?.nome}</td>

      <td>
        {nota.avaliacao}
      </td>

      <td>
        {editando ? (
          <input
            type="number"
            value={valor}
            onChange={(event) =>
              setValor(event.target.value)
            }
          />
        ) : (
          nota.nota
        )}
      </td>

      <td>
        {editando ? (
          <Button onClick={salvar}>
            Salvar
          </Button>
        ) : (
          <Button
            variant="secondary"
            onClick={() =>
              setEditando(true)
            }
          >
            Editar
          </Button>
        )}
      </td>
    </tr>
  );
}

export default NotaRow;