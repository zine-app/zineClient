import { Record } from 'immutable'


const PostModalRecord = Record({
  shouldDisplay: false,
  transition: ''
})

export class PostModal extends PostModalRecord {
  shouldDisplay: boolean
  transition: string
}

interface IPostModal {
  shouldDisplay: boolean
  transition: string
}

type TCreatePostModal = (appLoader ?: Partial<IPostModal>) => PostModal
export const createPostModal:TCreatePostModal = (postModal) => new PostModal(postModal)
