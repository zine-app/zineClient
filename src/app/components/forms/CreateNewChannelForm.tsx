import React from 'react'
import DropzoneField from 'app/components/DropzoneField'
import { Field } from 'redux-form/immutable'
import Toggle from 'react-toggle'
import 'app/styles/toggle'
import 'app/styles/zineIcon'
import PlusIcon from 'app/icons/plus'
import { isArray } from 'lodash'
import * as validate from 'app/utils/validate'
import ConfirmButton from 'app/containers/ConfirmButton'
import ImageField from 'app/components/fields/ImageField'
import TextField from 'app/components/fields/TextField'

const IconPlaceholder = () =>
  <div className="zine-icon__medium">
    <PlusIcon />
  </div>

const IconPreview = ({ url }) =>
  <div
    style={{ backgroundImage: `url("${url}")` }}
    className="zine-icon__medium"
  ></div>


export default props => {

  return (
    <div>
      <label>channel handle</label>
      <p>your channel handle is used in your web address, must be lowercase and can only contain underscores</p>
      <TextField
        className="control--field"
        name="name"
        placeholder="my_daily_doodels"
        validate={[
          validate.required,
          validate.name,
          validate.maxLength(25),
          validate.minLength(1)
        ]}
      />
      <div style={{ height: '4rem' }}/>
      <label>channel description</label>
      <p>give your channel a short description to help viewers know what it's about</p>
      <TextField
        className="control--field"
        name="description"
        placeholder="Daily Doodles by Alex"
        validate={[
          validate.maxLength(50),
          validate.minLength(0)
        ]}
      />
      <div style={{ height: '4rem' }}/>
      <label>categories (comma seperated)</label>
      <p>help people find your channel by adding it to relevant categories</p>
      <TextField
        className="control--field"
        name="categories"
        placeholder="art, drawings, doodles"
        validate={[ validate.commaSeperatedString, validate.maxLength(2000) ]}
      />
      <div style={{ height: '1px', backgroundColor: "rgb(200,200,200)", margin: "8rem 0" }}/>
      <label>icon image</label>
      <p>make your channel instantly recognizable with an icon image. This will be displayed thorought zine to help viewer discover your channel</p>
      <ImageField
        name="iconImageURL"
        renderPreview={(url, key) => <IconPreview url={url} key={key} />}
        renderPlaceholder={() => <IconPlaceholder />}
        validate={[ validate.maxFileSize(4000000)]}
      />
      <div style={{ height: '4rem' }}/>
      <label>header image</label>
      <p>personalize your channel with a header image. This will be displayed along the top of your home page, and will help to define your channels brand.</p>
      <ImageField
        name="headerImageURL"
        validate={[ validate.maxFileSize(4000000) ]}
      />
      <div style={{ height: '4rem' }}/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <button
          className="control--button__blue__large"
          disabled={props.pristine || props.invalid}
          onClick={props.handleSubmit(zine => props.save(zine.toJSON()))}
        >
        {
          props.submitting ?
          'creating...' :
          (props.pristine && props.submitSucceeded) ?
          'success!' :
          'create channel'
        }
        </button>
      </div>
      {
        props.error && <div className="control--error">{props.error}</div>
      }
    </div>
  )
}
