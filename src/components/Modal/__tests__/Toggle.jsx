// import React from 'react'
// import { shallow } from 'enzyme'
//
// import { Modal } from '../'
//
// describe('<Modal.Toggle />', () => {
//   it('renders with appropriate classNames', () => {
//     const $ = shallow(<Modal.Toggle className="test">test child</Modal.Toggle>)
//     expect($.hasClass('c-modal__toggle test')).toBe(true)
//   })
//
//   it('renders children', () => {
//     const $ = shallow(<Modal.Toggle>test child</Modal.Toggle>)
//     expect($.contains('test child')).toBe(true)
//   })
//
//   it('renders with attributes', () => {
//     const $ = shallow(
//       <Modal.Toggle
//         style={{ position: 'relative' }}
//         ariaHidden="true"
//       >
//         test child
//       </Modal.Toggle>
//     )
//     expect($.prop('style')).toEqual({
//       position: 'relative'
//     })
//     expect($.prop('ariaHidden')).toBe('true')
//   })
//
//   it('takes a callback function assigned to the `open` prop', () => {
//     const handleOpenMock = jest.fn()
//     const props = {
//       open: handleOpenMock
//     }
//     const $ = shallow(
//       <Modal.Toggle {...props}>test child</Modal.Toggle>
//     )
//     expect(handleOpenMock).not.toBeCalled()
//     $.simulate('click')
//     expect(handleOpenMock).toBeCalled()
//   })
// })
