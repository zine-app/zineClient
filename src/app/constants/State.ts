import { Record } from 'immutable'
import { createUser, User } from './User'


const StateRecord = Record({
  user: createUser({ name: '' })
})

class State extends StateRecord {
  user: User
}

export const createState = (state:Partial<IState>):State => new State(state)
