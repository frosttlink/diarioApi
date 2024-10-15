import { selecionarDiario } from "../../repository/diarioRepository.js";

export default async function selecionarDiarioService(id){
  let registros = selecionarDiario(id)
  return registros
}