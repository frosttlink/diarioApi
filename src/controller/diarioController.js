import alterarDiarioService from "../services/tbDiario/alterarDiarioService.js";
import deletarDiarioService from "../services/tbDiario/deletarDiarioService.js";
import adicionarDiarioService from "../services/tbDiario/adicionarDiarioService.js";

import selecionarDiarioService from "../services/tbDiario/selecionarDiarioService.js";

import { Router } from "express";
import { autenticar } from "../utils/jwt.js";
const endpoint = Router();

endpoint.post("/diario", autenticar, async (req, resp) => {
 
    let diario = req.body;
    diario.idUsuario = req.user.id;

    let idGerado = await adicionarDiarioService(diario);

    resp.send({
      id: idGerado,
    });
   
});

endpoint.put("/diario/:id", autenticar, async (req, resp) => {
  try {
    let diario = req.body;
    let id = req.params.id;

    let linhasAfetadas = await alterarDiarioService(diario, id);

    resp.status(204).send();
  } catch (error) {
    resp.status(400).send();
  }
});

endpoint.delete("/diario/:id", autenticar, async (req, resp) => {
  try {
    let id = req.params.id;

    let linhasAfetadas = await deletarDiarioService(id);

    resp.status(204).send();
  } catch (error) {
    resp.status(400).send();
  }
});

endpoint.get("/diario", autenticar, async (req, resp) => {
  try {
    let idUsuario = req.user.id;
    console.log(idUsuario)
    let registros = await selecionarDiarioService(idUsuario );

    resp.send(registros);
  } catch (error) {
    resp.status(400).send();
  }
});


export default endpoint;