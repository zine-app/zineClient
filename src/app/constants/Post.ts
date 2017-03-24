import { Record } from 'immutable'


const PostRecord = Record({
  id: '',
  title: '',
  description: '',
  authorId: '',
  zineId: '',
  contentURL: '',
  createdAt: ''
})

export class Post extends PostRecord {
  id: string
  title: string
  description: string
  authorId: string
  zineId: string
  contentURL: string
  createdAt: string
}

export const createPost = (post ?: Partial<Constant.IPost>):Post => new Post(post)
