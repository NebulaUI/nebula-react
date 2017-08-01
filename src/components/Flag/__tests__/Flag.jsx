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
})
