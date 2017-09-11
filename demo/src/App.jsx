import React, { Component } from 'react'

import {
  Button,
  ButtonDropdown,
  Card,
  SiteWrap,
  Section,
  Modal,
  Table,
} from 'nebula-react'

const tableData = {
  columns: [
    {
      title: 'Name',
      sortable: true,
    }, {
      title: 'Email',
      sortable: true,
      defaultSorted: true,
    },
    {
      title: 'Age',
      sortable: true,
    },
  ],
  rows: [
    [
      'Robert Smith',
      'robert.smith@checkd.media',
      32,
    ],
    [
      'Elliott Hesp',
      'elliott.hesp@checkd.media',
      26,
    ],
    [
      'Mike Diarmid',
      'mike.diarmid@checkd.media',
      34,
    ],
  ],
}
class App extends Component {
  constructor() {
    super()

    this.state = {
      isModalOpen: false,
    }
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    const { isModalOpen } = this.state
    return (
      <div>
        <Section size="md">
          <SiteWrap padding>
            <h1>Nebula React</h1>
            <Button size="md" theme="alpha" onClick={this.openModal}>
              Open Modal
            </Button>
            <Section size="md">
              <Table stackAt="max-md" data={tableData} />
            </Section>
          </SiteWrap>
        </Section>
        {
          isModalOpen && (
            <Modal.Wrapper ariaLabel="my modal" closeModal={this.closeModal}>
              <Modal.Overlay />
              <Modal.Body>
                <Modal.Content>
                  <Modal.Close>
                    <Modal.Dismiss>Close</Modal.Dismiss>
                  </Modal.Close>
                  <p>This is modal content</p>
                  <p>This is modal content</p>
                  <p>This is modal content</p>
                  <p>This is modal content</p>
                  <p>This is modal content</p>
                  <p>ITCSS and BEMIT based Sass/CSS framework that is ultra exensible
                    and scales to any project size.</p>
                  <Modal.Close>
                    <Button size="sm" theme="alpha">Close me</Button>
                  </Modal.Close>
                </Modal.Content>
              </Modal.Body>
            </Modal.Wrapper>
          )
        }
      </div>
    )
  }
}

export default App
