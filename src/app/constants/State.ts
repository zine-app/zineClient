import { Record } from 'immutable'
import { createUser, UserRecord } from './User'

const stateRecordDefaults:State = {
  user: createUser({ name: '' })
}

class StateRecord extends Record(stateRecordDefaults) {
  user: UserRecord
}

export const createState = (user ?: CreateStateParams):State => new StateRecord(user)
