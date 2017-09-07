import React from 'react'
import { mount } from 'enzyme'

import { ClickOutside } from '../'

import { addEListener, removeEListener } from '../../../utils/window'

jest.mock('../../../utils/window')

describe('<ClickOutside />', () => {
  it('adds a click handler to the window when mounted and removes it when it unmounts', () => {
    const mockAddEventListener = jest.fn()
    const mockRemoveEventListener = jest.fn()
    addEListener.mockImplementation(mockAddEventListener)
    removeEListener.mockImplementation(mockRemoveEventListener)

    const $ = mount(<ClickOutside onClickOutside={jest.fn()}><div /></ClickOutside>)
    const handleWindowClick = $.instance().handleWindowClick
    expect(mockAddEventListener).toHaveBeenCalledWith('click', handleWindowClick)
    $.unmount()
    expect(mockRemoveEventListener).toHaveBeenCalledWith('click', handleWindowClick)
  })

  it('calls the callback when clicked outside', () => {
    const mockOnClickOutside = jest.fn()
    const $ = mount(
      <ClickOutside onClickOutside={mockOnClickOutside}>
        <div />
      </ClickOutside>
    )

    expect(mockOnClickOutside).not.toHaveBeenCalled()

    $.instance().handleWindowClick({
      target: 'foo'
    })
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
