interface IAction {
  type: string
  error?: boolean
  payload?: any
  meta?: IActionMeta
}

interface IActionMeta {
  status?:number
  message?:string
  origin?:string
}

declare namespace Action {
  type CreatorReturnTypes = Promise<IAction> | IAction | Action.Creator<any>
  type Creator<Params> = (params?:Params) => CreatorReturnTypes
}
