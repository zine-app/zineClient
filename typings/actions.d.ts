interface IAction {
  type: string,
  error?: boolean,
  payload: any,
  meta: any
}

interface IUserAction extends IAction {
  payload:Partial<IUser>
}


declare namespace Action {
  type TsetUser = (params:Partial<IUser>) => IUserAction;
}
