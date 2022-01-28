import axios from 'axios'

interface IAddress {
  status: number
  ok: boolean
  code: string
  state: string
  city: string
  district: string
  address: string
  statusText: string
}

class GetCepService {
  async execute(codigo: string): Promise<IAddress> {
    const { data } = await axios.get(`https://ws.apicep.com/cep.json?code=${codigo}`)

    return data
  }
}

export { GetCepService }