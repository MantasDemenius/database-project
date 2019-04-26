import React from 'react'
import { Message } from 'semantic-ui-react'

const DatabaseBoxError = ({ text }) => (
  <Message
    negative
    header='Oops something went wrong!'
    content= { text }
    />
)
export default DatabaseBoxError
