import React from 'react'
import { mount } from 'enzyme'
import simulant from 'jsdom-simulant'

import { ClickOutside } from '../'

describe('<ClickOutside />', () => {
  it('calls the callback when clicked outside', () => {
    const mockOnClickOutside = jest.fn()
    const $ = mount(
      <ClickOutside onClickOutside={mockOnClickOutside}>
        <div />
      </ClickOutside>
    )

    expect(mockOnClickOutside).not.toHaveBeenCalled()

    simulant.fire(document, 'click')
    expect(mockOnClickOutside).toHaveBeenCalledTimes(1)

    $.instance().node = {
      contains: () => true
    }

    $.instance().handleWindowClick({
      target: 'foo'
    })
    expect(mockOnClickOutside).toHaveBeenCalledTimes(1)
  })
})
