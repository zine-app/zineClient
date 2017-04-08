import * as React from 'react'
import SidebarGroup from 'app/components/sidebar/Group'
import SidebarGroupItem from 'app/components/sidebar/Item'
import GearIcon from 'app/icons/Gear'
import 'app/styles/zineEditorTools'
import { Link } from 'react-router-dom'
import TrashIcon from 'app/icons/trash'
import EditIcon from 'app/icons/pencil'


interface IProps {
  zine: any
  post: any
  actions: any
  history: any
}

export default ({ zine, post, actions, history }:IProps) =>
  <SidebarGroup>
    <button
      onClick={() => {
        actions.modal.toggle({
          theme: 'white',
          transition: 'fadein',
          name: 'Post',
          props: {
            zine,
            post
          }
        })
      }}
      data-tip="edit post"
    >
      <EditIcon size="3rem" color="rgb(80,80,80)" />
    </button>
    <div style={{height: '0.3rem'}} />
    <button
      onClick={() => {
        actions.post.delete(post).then(() => history.replace(`/${zine.name}`))
      }}
      data-tip="delete post"
    >
      <TrashIcon size="3rem" color="rgb(80,80,80)" />
    </button>
  </SidebarGroup>
