import React from 'react'
import { Message } from 'semantic-ui-react'

const DatabaseBoxError = ({ text }) => (
  <Message
    negative
    header='Ivyko klaida'
    content= { text }
    />
)
export default DatabaseBoxError
