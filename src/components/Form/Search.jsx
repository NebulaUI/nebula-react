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

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = () => {
    // console.log('Submitted:', this.state.value)
  }

  render() {
    const { id, submitPosition, small, ...rest } = this.props
    return (
      <SearchWrapper
        id={id || randomId()}
        onSubmit={this.handleSubmit()}
        submitPosition={submitPosition}
        {...rest}
      >
        <SearchSubmit />
        <SearchInput
          id={id || randomId()}
          small={small}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </SearchWrapper>
    )
  }
}

Search.propTypes = {
  id: T.string,
  small: T.bool,
  submitPosition: T.oneOf(['left', 'right']).isRequired
}

export default Search
