import React from 'react'
import { shallow } from 'enzyme'

import FlagComponent from '../FlagComponent'

describe('<FlagComponent />', () => {
  it('renders the children', () => {
    const $ = shallow(
      <FlagComponent>
        <div className="test" />
      </FlagComponent>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('renders without wrapping whitespace', () => {
    const $ = shallow(<FlagComponent nowrap />)
    expect($.prop('className')).toBe('o-flag__component o-flag__component--nowrap')
  })

  it('passes down the className', () => {
    const $ = shallow(<FlagComponent className="test" />)
    expect($.prop('className')).toBe('o-flag__component test')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<FlagComponent node="article" />)
    expect($.type()).toBe('article')
  })
})
