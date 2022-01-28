import { Router } from "express"

import { cepRouter } from "./cep.routes"

const routes = Router()

routes.use(cepRouter)

export { routes }