import { Record } from 'immutable'


const PostModalRecord = Record({
  shouldDisplay: false
})

export class PostModal extends PostModalRecord {
  shouldDisplay: boolean
}

interface IPostModal {
  shouldDisplay: boolean
}

type TCreatePostModal = (appLoader ?: Partial<IPostModal>) => PostModal
export const createPostModal:TCreatePostModal = (postModal) => new PostModal(postModal)
