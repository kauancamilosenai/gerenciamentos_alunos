import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import cursos from "../data/Cursos";

function AlunoForm({
  aluno,
  onChange,
  onSubmit,
}) {
  return (
    <form
      className="form-card"
      onSubmit={onSubmit}
    >
      <h2>Novo aluno</h2>

      <div className="form-grid">
        <Input
          label="Nome"
          name="nome"
          value={aluno.nome}
          onChange={onChange}
          placeholder="Digite o nome"
        />

        <Input
          label="E-mail"
          name="email"
          type="text"
          value={aluno.email}
          onChange={onChange}
          placeholder="aluno@email.com"
        />

        <Input
          label="Idade"
          name="idade"
          type="number"
          value={aluno.idade}
          onChange={onChange}
          placeholder="Ex.: 18"
        />

        <Select
          label="Curso"
          name="curso"
          value={aluno.curso}
          onChange={onChange}
          options={cursos}
        />


      </div>

      <Button type="submit">
        Cadastrar aluno
      </Button>
    </form>
  );
}

export default AlunoForm;