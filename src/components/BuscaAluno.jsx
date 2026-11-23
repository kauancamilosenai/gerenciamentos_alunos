import Input from "./Input";

function BuscaAluno({ busca, onChange }) {
  return (
    <div className="busca">
      <Input
        label="Buscar aluno"
        name="busca"
        value={busca}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Digite o nome ou e-mail..."
      />
    </div>
  );
}

export default BuscaAluno;