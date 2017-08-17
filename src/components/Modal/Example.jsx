import React from 'react'
import T from 'prop-types'

import { Modal } from './'

const Example = ({ isOpen, close }) => (
  <div>
    <Modal.Wrapper isOpen={isOpen} close={close}>
      <p>This is modal content</p>
      <p>This is modal content</p>
      <p>This is modal content</p>
      <p>This is modal content</p>
      <p>This is modal content</p>
      <p>ITCSS and BEMIT based Sass/CSS framework that is ultra exensible
        and scales to any project size.</p>
    </Modal.Wrapper>
  </div>
)

Example.propTypes = {
  isOpen: T.bool,
  close: T.func
}

export default Example
