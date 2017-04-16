import { Record } from 'immutable'
import { createUser } from 'app/constants/User'
import { createZine } from 'app/constants/Zine'

const PostRecord = Record({
  id: '',
  title: '',
  authorId: '',
  zineId: '',
  body: null,
  createdAt: '',
  description: '',
  coverImageUrl: '',
  deleted: false
})


export class Post extends PostRecord {
  id: string
  title: string
  authorId: string
  zine: string
  body: any
  createdAt: string
  description: string
  coverImageUrl: string
  deleted: boolean
}

export const createPost = (post ?: Partial<Constant.IPost>):Post => new Post(post)

const PopulatedPostRecord = Record({
  id: '',
  title: '',
  author: createUser(),
  zine: createZine(),
  body: null,
  createdAt: '',
  description: '',
  coverImageUrl: '',
  boolean: false
})

export class PopulatedPost extends PopulatedPostRecord {
  id: string
  title: string
  author: string
  zine: string
  body: any
  description: string
  coverImageUrl: string
  createdAt: string
  deleted: boolean
}

interface IPopulatedPost {
  id: string
  title: string
  author: string
  zine: string
  body: any
  coverImageUrl: string
  createdAt: string
  deleted: boolean
}

export const createPopulatedPost = (post?:Partial<IPopulatedPost>):IPopulatedPost =>
  new PopulatedPost(post)
