import { Record } from 'immutable'
import { createUser } from 'app/constants/User'
import { createZine } from 'app/constants/Zine'

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
  zine: string
  contentURL: string
  createdAt: string
}

export const createPost = (post ?: Partial<Constant.IPost>):Post => new Post(post)

const PopulatedPostRecord = Record({
  id: '',
  title: '',
  description: '',
  author: createUser(),
  zine: createZine(),
  contentURL: '',
  createdAt: ''
})

export class PopulatedPost extends PopulatedPostRecord {
  id: string
  title: string
  description: string
  author: string
  zine: string
  contentURL: string
  createdAt: string
}

interface IPopulatedPost {
  id: string
  title: string
  description: string
  author: string
  zine: string
  contentURL: string
  createdAt: string
}

export const createPopulatedPost = (post?:Partial<IPopulatedPost>):IPopulatedPost =>
  new PopulatedPost(post)
