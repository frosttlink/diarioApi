import adicionarUsuarioService from "../../src/services/tbUsuario/adicionarUsuarioService.js";
import deletarUsuarioService from "../../src/services/tbUsuario/deletarUsuarioService.js";
import alterarUsuarioService from "../../src/services/tbUsuario/alterarUsuarioService.js";

import validarUsuarioService from "../../src/services/tbUsuario/validarUsuarioService.js";

import { Router } from "express";
import { gerarToken } from "../utils/jwt.js";
const endpoint = Router();

endpoint.post("/usuario", async (req, resp) => {
  try {
    let usuario = req.body;

    let idGerado = await adicionarUsuarioService(usuario);

    resp.send({
      id: idGerado,
    });
  } catch (error) {
    resp.status(400).send({error:error.message});
  }
});

endpoint.put("/usuario/:id", async (req, resp) => {
  try {
    let usuario = req.body;
    let id = req.params.id;

    let linhasAfetadas = await alterarUsuarioService(usuario, id);

    resp.status(204).send();
  } catch (error) {
    resp.status(400).send();
  }
});

endpoint.delete("/usuario/:id", async (req, resp) => {
  try {
    let id = req.params.id;

    let linhasAfetadas = await deletarUsuarioService(id);

    resp.status(204).send();
  } catch (error) {
    resp.status(400).send();
  }
});

endpoint.post("/entrar", async (req, resp) => {
try {
  let pessoa = req.body

  let usuario = await validarUsuarioService(pessoa);

console.log(usuario)
  if(usuario == null){
    resp.send({
      erro: 'Usuario ou senha incorretos'
  })
} else {
  let token = gerarToken(usuario);
  resp.send({
    "token": token
  })
} 

  
} catch (error) {
  resp.status(400).send({error:message})
}
 

 
});

endpoint.get("/usuario/:id", async (req, resp) => {
  try {
    let idUsuario = req.params.id;

    let registros = await validarUsuarioService(idUsuario);

    resp.send(registros);
  } catch (error) {
    resp.status(400).send();
  }
});

export default endpoint;