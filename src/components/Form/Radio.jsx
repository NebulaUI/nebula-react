import React from 'react'
import T from 'prop-types'

import RadioWrapper from './RadioWrapper'
import RadioLabel from './RadioLabel'
import RadioInput from './RadioInput'

const Radio = ({ children, id, name }) => (
  <RadioWrapper>
    <RadioInput id={id} name={name} />
    <RadioLabel id={id}>
      {children}
    </RadioLabel>
  </RadioWrapper>
)

Radio.propTypes = {
  children: T.node.isRequired,
  id: T.string.isRequired,
  name: T.string.isRequired
}

export default Radio
