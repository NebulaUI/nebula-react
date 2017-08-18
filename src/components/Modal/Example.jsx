import React from 'react'
import T from 'prop-types'

import { Button } from '../../'
import { Modal } from './'

const Example = ({ isOpen, close }) => (
  <Modal.Wrapper isOpen={isOpen}>
    <Modal.Overlay onClick={close} />
    <Modal.Body>
      <Modal.Content>
        <Button className="c-modal__dismiss" size="sm" onClick={close}>Close</Button>
        <p>This is modal content</p>
        <p>This is modal content</p>
        <p>This is modal content</p>
        <p>This is modal content</p>
        <p>This is modal content</p>
        <p>ITCSS and BEMIT based Sass/CSS framework that is ultra exensible
          and scales to any project size.</p>
      </Modal.Content>
    </Modal.Body>
  </Modal.Wrapper>
)

Example.propTypes = {
  isOpen: T.bool,
  close: T.func
}

export default Example
