import React from 'react'
import { shallow } from 'enzyme'

import FlagBody from '../FlagBody'

describe('<FlagBody />', () => {
  it('renders the children', () => {
    const $ = shallow(
      <FlagBody>
        <div className="test" />
      </FlagBody>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('passes down the className', () => {
    const $ = shallow(<FlagBody className="test" />)
    expect($.prop('className')).toBe('o-flag__body test')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<FlagBody node="article" />)
    expect($.type()).toBe('article')
  })
})
