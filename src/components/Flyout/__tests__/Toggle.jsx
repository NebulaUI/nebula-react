import React from 'react'
import { shallow } from 'enzyme'

import { Flyout } from '../'

describe('<Flyout.Toggle />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Flyout.Toggle className="test">test child</Flyout.Toggle>)
    expect($.hasClass('c-flyout__toggle test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Flyout.Toggle>test child</Flyout.Toggle>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flyout.Toggle
        style={{ position: 'relative' }}
        ariaHidden="true"
      >
        test child
      </Flyout.Toggle>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
