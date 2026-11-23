function UploadFoto({ foto, onChange }) {
  function selecionarFoto(event) {
    const arquivo = event.target.files[0];

    if (!arquivo) return;

    const url = URL.createObjectURL(arquivo);

    onChange(url);
  }

  return (
    <div className="upload">
      <label>Foto do aluno</label>

      <input
        type="file"
        accept="image/*"
        onChange={selecionarFoto}
      />

      {foto && (
        <img
          src={foto}
          alt="Foto do aluno"
          className="foto-preview"
        />
      )}
    </div>
  );
}

export default UploadFoto;