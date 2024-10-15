import { adicionarDiario } from "../../repository/diarioRepository.js";

export default async function adicionarDiarioService(diario) {
  let idGerado = await adicionarDiario(diario)

  return idGerado
}