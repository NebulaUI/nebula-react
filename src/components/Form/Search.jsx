import React, { Component } from 'react'
import T from 'prop-types'
import { randomId } from '../../utils/'

import SearchWrapper from './SearchWrapper'
import SearchSubmit from './SearchSubmit'
import SearchInput from './SearchInput'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  isControlled = () => !!this.props.value

  handleChange = (e) => {
    if (this.isControlled) {
      return this.props.onChange(e.target.value)
    }
    return this.setState(e.target.value)
  }

  handleSubmit = () => {
    if (this.isControlled) {
      return this.props.onSubmit(this.props.value)
    }
    return this.state.value
  }

  render() {
    const {
      id = randomId(),
      action,
      method,
      submitPosition,
      small,
      defaultValue,
      value,
      ...rest
    } = this.props
    return (
      <SearchWrapper
        id={id}
        action={action}
        method={method}
        onSubmit={this.handleSubmit}
        submitPosition={submitPosition}
        {...rest}
      >
        <SearchSubmit />
        <SearchInput
          id={id}
          small={small}
          onChange={this.handleChange}
          value={defaultValue}
        />
      </SearchWrapper>
    )
  }
}

Search.propTypes = {
  id: T.string,
  action: T.string,
  method: T.string,
  small: T.bool,
  submitPosition: T.oneOf(['left', 'right']).isRequired,
  onChange: T.func,
  onSubmit: T.func,
  defaultValue: T.oneOfType([T.number, T.string]),
  value: T.oneOfType([T.number, T.string])
}

export default Search
