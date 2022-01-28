import { Router } from "express"

import { GetCepController } from "../cep/controllers/GetCepController"
import { validateCep } from "../cep/middlewares/validateCep"

const cepRouter = Router()

const getCepController = new GetCepController()

cepRouter.get(
  '/cep/:codigo',
  validateCep,
  getCepController.handle)

export { cepRouter }