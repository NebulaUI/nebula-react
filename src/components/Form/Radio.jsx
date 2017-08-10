import React, { Component } from 'react'
import T from 'prop-types'

import RadioWrapper from './RadioWrapper'
import RadioLabel from './RadioLabel'
import RadioInput from './RadioInput'

class Radio extends Component {
  constructor() {
    super()
    this.state = {
      isChecked: false,  // <= TODO
      selectedOption: {
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3'
      }
    }
  }

  handleChange = () => {
    this.setState = ({
      isChecked: true,
      selectedOption: this.state.selectedOption.option1
    })
  }

  render() {
    const { id, name, children } = this.props
    return (
      <RadioWrapper>
        <RadioInput
          id={id}
          name={name}
          onChange={this.handleChange}
          checked={this.state.selectedOption === 'Option 1'}
          value="option1"
        />
        <RadioLabel id={id}>
          {children}
        </RadioLabel>
      </RadioWrapper>
    )
  }
}

Radio.propTypes = {
  children: T.node.isRequired,
  id: T.string.isRequired,
  name: T.string.isRequired
}

export default Radio
