import * as React from 'react'
import PostForm from 'app/components/forms/PostForm'
import { withRouter } from 'react-router'
import { reduxForm } from 'redux-form/immutable'
import { connect } from 'react-redux'
import savePost from 'app/actions/post/savePost'
import hideModal from 'app/actions/UI/modal/hideModal'
import { assign, map } from 'lodash'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import uploadImage from 'app/webAPI/image'


const mapDispatchToProps = (dispatch, { zine, history, editorState }) => ({
  save: form => {
      const rawContentState = convertToRaw(form.get('body').getCurrentContent())

      return Promise.all(
        map(rawContentState.entityMap, (entity:any) =>
          entity.data.image ?
            uploadImage(entity.data.image) :
            Promise.resolve(entity.data))
      )
      // normalize the responses
      .then(responses =>
        responses.map(response =>
          response.body ?
            response.body.url :
            response.url
        )
      )
      // map repsonses to entityMap
      .then(responses =>
        map(rawContentState.entityMap, (entity, index) =>
          assign(entity, { data: { url: responses[index] } })
        )
      )
      // save post
      .then(entityMap =>
        dispatch(savePost({
          id: editorState && editorState.get('id'),
          zineId: zine.id,
          title: form.get('title'),
          body: assign(rawContentState, { entityMap })
        }))
      )
      .then(action =>
        history.push(`/${zine.name}/post/${action.payload.id}`))
      .then(() => dispatch(hideModal()))
  },



  close: () => dispatch(hideModal())
})


const mapStateToProps = (state, { editorState }) => ({
  initialValues: editorState
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'postForm'
})(PostForm)))
