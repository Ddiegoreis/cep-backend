import { Request, Response } from "express"
import axios from 'axios'

class GetCepController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigo } = request.cep

    const { data } = await axios.get(`https://ws.apicep.com/cep.json?code=${codigo}`)

    return response.json(data)
  }
}

export { GetCepController }