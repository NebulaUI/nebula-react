import React, { Component } from 'react'

import {
  Button,
  ButtonDropdown,
  Card,
  SiteWrap,
  Section,
  BareList,
  InlineList,
  MatrixList,
  UniformedList,
  Flyout,
  Form,
  Modal,
  Table,
  StatusCard,
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
            <Modal.Wrapper closeModal={this.closeModal} isOpen={isModalOpen}>
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
            </Modal.Wrapper>

            <h3>Button Dropdowns</h3>
            <ButtonDropdown.Wrapper clickOutsideToClose defaultOpen="open" togglePosition="left">
              <Button node="a" to="/" size="md" theme="alpha" className="c-btn--full">
                Click to go to link
              </Button>
              <ButtonDropdown.Toggle />
              <ButtonDropdown.Content>
                <Card>
                  <ul className="o-bare-list">
                    <li className="o-bare-list__item">Option 1</li>
                    <li className="o-bare-list__item">Option 2</li>
                    <li className="o-bare-list__item">Option 3</li>
                  </ul>
                  <ButtonDropdown.Close>
                    <Button>close</Button>
                  </ButtonDropdown.Close>
                </Card>
              </ButtonDropdown.Content>
            </ButtonDropdown.Wrapper>
            <ButtonDropdown.Wrapper isOpen="open" togglePosition="right">
              <Button node="a" to="/" size="lg" theme="alpha" className="c-btn--full">
                Click to go to link
              </Button>
              <ButtonDropdown.Toggle />
              <ButtonDropdown.Content>
                <Card>
                  <ul className="o-bare-list">
                    <li className="o-bare-list__item">Option 1</li>
                    <li className="o-bare-list__item">Option 2</li>
                    <li className="o-bare-list__item">Option 3</li>
                  </ul>
                </Card>
              </ButtonDropdown.Content>
            </ButtonDropdown.Wrapper>
            <ButtonDropdown.Wrapper togglePosition="right">
              <Button node="a" to="/" size="sm" theme="alpha" className="c-btn--full">
                Click to go to link
              </Button>
              <ButtonDropdown.Toggle />
              <ButtonDropdown.Content>
                <Card>
                  <ul className="o-bare-list">
                    <li className="o-bare-list__item">Option 1</li>
                    <li className="o-bare-list__item">Option 2</li>
                    <li className="o-bare-list__item">Option 3</li>
                  </ul>
                </Card>
              </ButtonDropdown.Content>
            </ButtonDropdown.Wrapper>
            <Section size="md">
              <Table stackAt="max-md" data={tableData} />
            </Section>
          </SiteWrap>
        </Section>
      </div>
    )
  }
}

export default App
