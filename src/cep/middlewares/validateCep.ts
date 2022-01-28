import { NextFunction, Request, Response } from "express";
import { AppError } from "../../err/AppError";

export async function validateCep(request: Request, response: Response, nextFunction: NextFunction) {
  try {
    const { codigo } = request.params
    const formatCep = /^[0-9]{8}$/

    const isCep = formatCep.test(codigo)

    if (!isCep)
      throw new AppError('Invalid Zip Code', 422)

    request.cep = {
      codigo
    }

    nextFunction()
  } catch {
    throw new AppError('Invalid Zip Code', 422)
  }
}