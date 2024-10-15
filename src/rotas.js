import usuarioController from "./controller/usuarioController.js"
import diarioController from "./controller/diarioController.js"

export default async function rotas(servidor) {
  servidor.use(usuarioController);
  servidor.use(diarioController);
}