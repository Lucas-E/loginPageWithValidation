import React from 'react'
import {ButtonContainer} from './style'
import { Fragment } from 'react'

const Button = ({children, disabled,...rest}) => {
  return (
    <Fragment>
      <ButtonContainer disabled={disabled} {...rest}>
        {children}
      </ButtonContainer>
    </Fragment>
  )
}

export default Button