import React from 'react'
import { Message } from 'semantic-ui-react'

const DatabaseBoxSuccess = ({ text }) => (
  <Message
    positive
    content= { text }
  />
)

export default DatabaseBoxSuccess
