export const required = value => value ? undefined : 'Required'

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

  export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const string = value => typeof value === 'string'

export const plainString = value =>
  value && /[^A-Z0-9]/i.test(value) ?
  'Must contain letters or numbers only' : undefined

export const commaSeperatedString = value =>
  value && /[^A-Z0-9\,\s]/i.test(value) ?
  'Must contain letters, numbers or , only' : undefined

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

export const pattern = (regex, message = 'Invalid format') => (value) =>
  value && !regex.test(value) ? message : undefined

export const name = value =>
  value && /[^A-Z0-9_]/i.test(value) ?
  'Must contain letters, numbers or _ only' : undefined

export const maxFileSize = size => file =>
  file && file.length && file.length > 0 &&
    file[0] instanceof File &&
    file[0].size > size ?
    'too large' : undefined
