import { alterarDiario } from "../../repository/diarioRepository.js";

export default async function alterarDiarioService(diario, id){
  let linhasAfetadas = alterarDiario(diario, id)

  if(linhasAfetadas == 0 )
  throw new Error('Nenhum diario alterado/encontrado')
}