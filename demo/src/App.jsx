import React, { Component } from 'react'

import {
  Button,
  Card,
  SiteWrap,
  Section,
  Tabs,
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
      id: 'column-0',
      title: 'Name',
      sortable: true,
    }, {
      id: 'column-1',
      title: 'Email',
      sortable: true,
      defaultSorted: true,
    },
  ],
  rows: [
    {
      id: 'row-0',
      cells: [
        { id: 'cell-0', children: 'Robert Smith' },
        { id: 'cell-1', children: 'robert.smith@checkd.media' },
      ],
    }, {
      id: 'row-1',
      cells: [
        { id: 'cell-0', children: 'Elliott Hesp' },
        { id: 'cell-1', children: 'elliott.hesp@checkd.media' },
      ],
    }, {
      id: 'row-2',
      cells: [
        { id: 'cell-0', children: 'Mike Diarmid' },
        {
          id: 'cell-1',
          children: <a href="mailto:mike.diarmid@checkd.media">mike.diarmid@checkd.media</a>
        },
      ],
    },
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
                <Modal.Dismiss>Close</Modal.Dismiss>
                <p>This is modal content</p>
                <p>This is modal content</p>
                <p>This is modal content</p>
                <p>This is modal content</p>
                <p>This is modal content</p>
                <p>ITCSS and BEMIT based Sass/CSS framework that is ultra exensible
                  and scales to any project size.</p>
              </Modal.Content>
            </Modal.Wrapper>

            <h2>Lists</h2>
            <Tabs.Wrapper>
              <Tabs.TabList>
                <Tabs.Tab>Bare list</Tabs.Tab>
                <Tabs.Tab>Inline list</Tabs.Tab>
                <Tabs.Tab>Matrix list</Tabs.Tab>
                <Tabs.Tab>Uniformed list</Tabs.Tab>
              </Tabs.TabList>
              <Tabs.Panels>
                <Tabs.Panel>
                  <BareList.Wrapper spacing="md">
                    <BareList.Item>Help</BareList.Item>
                    <BareList.Item>Me</BareList.Item>
                  </BareList.Wrapper>
                </Tabs.Panel>
                <Tabs.Panel>
                  <InlineList.Wrapper spacing="md@md">
                    <InlineList.Item>Help</InlineList.Item>
                    <InlineList.Item>Me</InlineList.Item>
                  </InlineList.Wrapper>
                </Tabs.Panel>
                <Tabs.Panel>
                  <MatrixList.Wrapper spacing="md">
                    <MatrixList.Item>Help</MatrixList.Item>
                    <MatrixList.Item>Me</MatrixList.Item>
                  </MatrixList.Wrapper>
                </Tabs.Panel>
                <Tabs.Panel>
                  <UniformedList.Wrapper breakpoint="md">
                    <UniformedList.Item>Help</UniformedList.Item>
                    <UniformedList.Item>Me</UniformedList.Item>
                  </UniformedList.Wrapper>
                </Tabs.Panel>
              </Tabs.Panels>
            </Tabs.Wrapper>

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
