import React from 'react'
import { shallow } from 'enzyme'

import Flag from '../Flag'

describe('<Flag />', () => {
  it('renders the children', () => {
    const $ = shallow(
      <Flag>
        <div className="test" />
      </Flag>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('renders with a breakpoint', () => {
    const $ = shallow(<Flag breakpoint="md" />)
    expect($.prop('className')).toBe('o-flag o-flag@md')
  })

  it('renders with a gutter', () => {
    const $ = shallow(<Flag gutter="md" />)
    expect($.prop('className')).toBe('o-flag o-flag--gutter-md')
  })

  it('renders reverse', () => {
    const $ = shallow(<Flag reverse />)
    expect($.prop('className')).toBe('o-flag o-flag--reverse')
  })

  it('passes down the className', () => {
    const $ = shallow(<Flag className="test" />)
    expect($.prop('className')).toBe('o-flag test')
  })
})
