import { Record } from 'immutable'
import { createUser } from 'app/constants/User'
import { createZine } from 'app/constants/Zine'

const PostRecord = Record({
  id: '',
  title: '',
  description: '',
  author: createUser(),
  zine: createZine(),
  contentURL: '',
  createdAt: ''
})

export class Post extends PostRecord {
  id: string
  title: string
  description: string
  author: {
    id: string
    profileImageURL: string
  }
  zine: {
    id: string
    iconImageURL: string
  }
  contentURL: string
  createdAt: string
}

export const createPost = (post ?: Partial<Constant.IPost>):Post => new Post(post)
