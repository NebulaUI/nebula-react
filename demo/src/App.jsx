import React, { Component } from 'react'

import {
  Button,
  ButtonDropdown,
  Card,
  SiteWrap,
  Section,
  Flyout,
  Form,
  Modal,
  Pagination,
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
            <h2>Lists</h2>
            <Form.Radio id="radio-1" value="one" name="radio-group" checked onChange={() => {}}>Option 1</Form.Radio>
            <Form.Radio id="radio-2" value="two" name="radio-group">Option 2</Form.Radio>
            <Form.Radio id="radio-3" value="two" name="radio-group" disabled>Option 3</Form.Radio>
            <Form.Checkbox id="checkbox-1">Option 1</Form.Checkbox>
            <Form.Checkbox id="checkbox-2" checked disabled>Option 2</Form.Checkbox>
            <Form.Checkbox id="checkbox-3" disabled>Option 3</Form.Checkbox>
            <Form.Select value="default" name="select-name" onChange={() => {}}>
              <option value="default">Select option</option>
              <option value="1">Option 1</option>
              <option value="2" disabled>Option 2</option>
              <option value="3">Option 3</option>
            </Form.Select>
            <Form.Search submitPosition="left" />
            <Card>
              <h3>Card Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Ab adipisci architecto assumenda et expedita fugit id illum.</p>
            </Card>
            <StatusCard status="error">
            Error
          </StatusCard>
            <Flyout.Wrapper>
              <Flyout.Toggle>
              Click me
            </Flyout.Toggle>
              <Flyout.Content direction="se">
                <Card>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab adipisci architecto assumenda et expedita fugit id illum
              </Card>
              </Flyout.Content>
            </Flyout.Wrapper>
            <Flyout.Wrapper>
              <Flyout.Toggle>
                <Button node="span" size="sm" theme="alpha">
                Github
              </Button>
              </Flyout.Toggle>
              <Flyout.Content direction="ne">
                <Card>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab adipisci architecto assumenda et expedita fugit id illum
              </Card>
              </Flyout.Content>
            </Flyout.Wrapper>
            <Flyout.Wrapper>
              <Flyout.Toggle>
              Click me
            </Flyout.Toggle>
              <Flyout.Content>
                <Card>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab adipisci architecto assumenda et expedita fugit id illum
              </Card>
              </Flyout.Content>
            </Flyout.Wrapper>
            <Button type="submit" size="md" theme="beta">
              Button test
            </Button>
            <h3>Button Dropdowns</h3>
            <ButtonDropdown.Wrapper togglePosition="left">
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
                </Card>
              </ButtonDropdown.Content>
            </ButtonDropdown.Wrapper>
            <ButtonDropdown.Wrapper togglePosition="right">
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
            <Pagination.Wrapper activeLabel="Pagination Navigation">
              <Pagination.Item>
                <Pagination.Link className="c-pagination__link--previous" to="/" disabled>Prev</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link className="c-pagination__link" to="/">1</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link className="c-pagination__link" to="/" isActive>2</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link className="c-pagination__link" to="/">3</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link className="c-pagination__link--next" to="/">Next</Pagination.Link>
              </Pagination.Item>
            </Pagination.Wrapper>
          </SiteWrap>
        </Section>
      </div>
    )
  }
}

export default App
