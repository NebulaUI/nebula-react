import React from 'react'
import { shallow } from 'enzyme'

import { Modal } from '../'

describe('<Modal.Example />', () => {
  it('passes down `isOpen` props', () => {
    const props = {
      isOpen: true
    }
    const $ = shallow(<Modal.Example {...props} />)
    expect($.prop('isOpen')).toBe(true)
  })
})
