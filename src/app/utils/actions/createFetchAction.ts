import { createAction } from 'redux-actions'

const defaultMapResponseToPayload = (response:webAPI.Response.IResponse) =>
  response.error ? new Error(response.message) : response.body

const defaultMapResponseToMeta = (response:webAPI.Response.IResponse, origin?:string):any => ({
  status: response.status,
  message: response.message,
  origin
})

const createFetchAction = (
  type:string,
  request:(params:any) => Promise<any>,
  requestParams?:any) =>
  // curry to allow overrides of default mapping functions
  async (
    mapResponseToPayload = defaultMapResponseToPayload,
    mapResponseToMeta = defaultMapResponseToMeta
  ):Promise<IAction> =>
  // call request and return action
  {
      const response = await request(requestParams)
      return createAction(type, mapResponseToPayload, mapResponseToMeta)(response)
  }

  export default createFetchAction
