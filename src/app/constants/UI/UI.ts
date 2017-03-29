import { Record, Map } from 'immutable'

const UIRecord = Record({
  hasInitialzed: true,
  loading: false,
  props: Map(),
  error: null
})

class UI extends UIRecord {
  hasInitialzed: boolean
  loading: boolean
  props: any
  error: any
}

interface IUI {
  hasInitialzed: boolean
  loading: boolean
  props: any
  error: any
}


export const createUI = (ui?:Partial<IUI>):UI => new UI(ui)
