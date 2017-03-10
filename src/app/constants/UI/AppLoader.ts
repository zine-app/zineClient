import { Record } from 'immutable'


const AppLoaderRecord = Record({
  shouldDisplay: false,
})

export class AppLoader extends AppLoaderRecord {
  shouldDisplay: boolean
}

interface IAppLoader {
  shouldDisplay: boolean
}

type TcreateAppLoader = (appLoader ?: Partial<IAppLoader>) => AppLoader
export const createAppLoader:TcreateAppLoader = (appLoader) => new AppLoader(appLoader)
