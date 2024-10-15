import con from "./connection.js";

export async function adicionarDiario(diario) {
  let comando = `
  insert into tb_diario (dt_dia, ds_conteudo, id_usuario)
		values (?,?,?)
  `;
  let registro = await con.query(comando, [
    diario.dia,
    diario.conteudo,
    diario.idUsuario
  ]);

  let info = registro[0];
  let idGerado = info.insertId;

  return idGerado;
}

export async function alterarDiario(diario, id) {
  let comando = `
  update tb_diario
	set dt_dia = ?, 
		ds_conteudo = ?
	where id_diario = ?
  `;

  let registro = await con.query(comando, [
    diario.dia,
    diario.conteudo,
    id
  ]);

  let info = registro[0];
  let linhasAfetadas = info.affectedRows;
  return linhasAfetadas;
}

export async function deletarDiario(id) {
  let comando = `
  delete from tb_diario where id_diario = ?
  `;

  let registro = await con.query(comando, [id]);

  let info = registro[0];
  let linhasAfetadas = info.affectedRows;

  return linhasAfetadas;
}

export async function selecionarDiario(id) {
  let comando = `
  select id_diario as idDiario,
   dt_dia as dtDia,
   ds_conteudo as dsConteudo,
    id_usuario as idUsuario
     from tb_diario
     where id_usuario = ?
  `;

  let registro = await con.query(comando, [id]);

  let info = registro[0];

  return info;
}
