import { Record } from 'immutable'
import { createUser } from 'app/constants/User'
import { createZine } from 'app/constants/Zine'

const PostRecord = Record({
  id: '',
  title: '',
  authorId: '',
  zineId: '',
  body: null,
  createdAt: ''
})


export class Post extends PostRecord {
  id: string
  title: string
  authorId: string
  zine: string
  body: any
  createdAt: string
}

export const createPost = (post ?: Partial<Constant.IPost>):Post => new Post(post)

const PopulatedPostRecord = Record({
  id: '',
  title: '',
  author: createUser(),
  zine: createZine(),
  body: null,
  createdAt: ''
})

export class PopulatedPost extends PopulatedPostRecord {
  id: string
  title: string
  author: string
  zine: string
  body: any
  createdAt: string
}

interface IPopulatedPost {
  id: string
  title: string
  author: string
  zine: string
  body: any
  createdAt: string
}

export const createPopulatedPost = (post?:Partial<IPopulatedPost>):IPopulatedPost =>
  new PopulatedPost(post)
