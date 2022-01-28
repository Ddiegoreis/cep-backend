import { Request, Response } from "express"

import { GetCepService } from "../services/GetCepService"

class GetCepController {
  private getCepService: GetCepService

  async handle(request: Request, response: Response): Promise<Response> {
    this.getCepService = new GetCepService()

    const { codigo } = request.cep

    const data = await this.getCepService.execute(codigo)

    return response.json(data)
  }
}

export { GetCepController }