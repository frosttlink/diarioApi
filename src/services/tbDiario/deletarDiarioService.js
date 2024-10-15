import { deletarDiario } from "../../repository/diarioRepository.js";

export default async function deletarDiarioService(id) {
  let linhasAfetadas = deletarDiario(id)

  if (linhasAfetadas == 0 )
  throw new Error('Nenhum diario deletado/encontrado')
}