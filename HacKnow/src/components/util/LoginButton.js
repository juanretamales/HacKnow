import React from 'react'
import { requestDisclosure } from '../../uport'

const LoginButton = () => (
  <button onClick={() => requestDisclosure({verified: ['sampleVerification']})}>Identificarse con Uport</button>
)

export default LoginButton
