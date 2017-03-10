export class ResponseError extends Error {
  constructor(message:string, status:number) {
    super(message)
    this.name = 'ResponseError'
    this.status = status
  }

  status:number
}

export const checkStatus = (response:Response):Response | ResponseError => {
  if(response.ok) return response

  throw new ResponseError(response.statusText, response.status)
}

export const parseJSON = (response:Response):any => response.json()

export const handleError = (error:Error | ResponseError) =>
  error.name === 'ResponseError' ?
    {
      error: true,
      status: (error as ResponseError).status,
      message: error.message
    }:
    {
      error: true,
      message: error.message
    }
