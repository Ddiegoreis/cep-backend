import { NextFunction, Request, Response } from "express"

import { AppError } from "../../err/AppError"

export async function errorManager(err: Error, request: Request, response: Response, next: NextFunction) {
  if (err instanceof AppError)
    return response.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode
    })

  return response.status(500).json({
    message: `Internal server error - ${err.message}`,
    status: "error"
  })
}