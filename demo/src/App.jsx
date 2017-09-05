import React, { Component } from 'react'

import {
  Button,
  ButtonDropdown,
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


class TabsExample extends Component {
  state = {
    activeId: 'bare-list',
  }

  render() {
    const activateUniformedList = () => {
      this.setState({
        activeId: 'uniformed-list',
      })
    }

    const activateBareList = () => {
      this.setState({
        activeId: 'bare-list',
      })
    }
    return (
      <div>
        <div>
          <Section size="md">
            <Button size="sm" theme="alpha" onClick={activateUniformedList}>
              Take me to the Uniformed list
            </Button>
          </Section>
        </div>
        <Tabs.Wrapper
          activeId={this.state.activeId}
          onChange={(target) => {
            console.log('controlled tab change', target)
            this.setState({
              activeId: target,
            })
          }}
        >
          <div>
            Controlled
            <hr />
            <Tabs.TabList>
              <Tabs.Tab target="bare-list">Bare list</Tabs.Tab>
              <Tabs.Tab target="inline-list">Inline list</Tabs.Tab>
              <Tabs.Tab target="matrix-list">Matrix list</Tabs.Tab>
              <Tabs.Tab target="uniformed-list">Uniformed list</Tabs.Tab>
            </Tabs.TabList>
          </div>
          <div style={{ minHeight: '100px', border: '10px solid red' }}>
            <Tabs.Panel id="bare-list">
              <BareList.Wrapper spacing="md">
                <BareList.Item>Help</BareList.Item>
                <BareList.Item>Me</BareList.Item>
              </BareList.Wrapper>
              <Button size="sm" theme="alpha" onClick={activateUniformedList}>
                Take me to the Uniformed list
              </Button>
            </Tabs.Panel>
            <Tabs.Panel id="inline-list">
              <InlineList.Wrapper spacing="md@md">
                <InlineList.Item>Help</InlineList.Item>
                <InlineList.Item>Me</InlineList.Item>
              </InlineList.Wrapper>
            </Tabs.Panel>
            <Tabs.Panel id="matrix-list">
              <MatrixList.Wrapper spacing="md">
                <MatrixList.Item>Help</MatrixList.Item>
                <MatrixList.Item>Me</MatrixList.Item>
              </MatrixList.Wrapper>
            </Tabs.Panel>
            <Tabs.Panel id="uniformed-list">
              <UniformedList.Wrapper breakpoint="md">
                <UniformedList.Item>Help</UniformedList.Item>
                <UniformedList.Item>Me</UniformedList.Item>
              </UniformedList.Wrapper>
              <Button size="sm" theme="alpha" onClick={activateBareList}>
                Go back to bare list
              </Button>
            </Tabs.Panel>
          </div>
        </Tabs.Wrapper>
      </div>
    )
  }
}
// eslint-disable-next-line react/no-multi-comp
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

            <Tabs.Wrapper
              onChange={value => console.log('uncontrolled tab change', value)}
            >
              <Tabs.TabList>
                <Tabs.Tab id="bare-list-tab" target="bare-list-panel">Bare list</Tabs.Tab>
                <Tabs.Tab id="inline-list-tab" target="inline-list-panel">Inline list</Tabs.Tab>
                <Tabs.Tab id="matrix-list-tab" target="matrix-list-panel">Matrix list</Tabs.Tab>
                <Tabs.Tab id="uniformed-list-tab" target="uniformed-list-panel">Uniformed list</Tabs.Tab>
              </Tabs.TabList>
              <Tabs.Panel id="bare-list-panel">
                <BareList.Wrapper spacing="md">
                  <BareList.Item>Help</BareList.Item>
                  <BareList.Item>Me</BareList.Item>
                </BareList.Wrapper>
              </Tabs.Panel>
              <Tabs.Panel id="inline-list-panel">
                <InlineList.Wrapper spacing="md@md">
                  <InlineList.Item>Help</InlineList.Item>
                  <InlineList.Item>Me</InlineList.Item>
                </InlineList.Wrapper>
              </Tabs.Panel>
              <Tabs.Panel id="matrix-list-panel">
                <MatrixList.Wrapper spacing="md">
                  <MatrixList.Item>Help</MatrixList.Item>
                  <MatrixList.Item>Me</MatrixList.Item>
                </MatrixList.Wrapper>
              </Tabs.Panel>
              <Tabs.Panel id="uniformed-list-panel">
                <UniformedList.Wrapper breakpoint="md">
                  <UniformedList.Item>Help</UniformedList.Item>
                  <UniformedList.Item>Me</UniformedList.Item>
                </UniformedList.Wrapper>
              </Tabs.Panel>
            </Tabs.Wrapper>
            <Section size="md">
              <TabsExample />
            </Section>
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
          </SiteWrap>
        </Section>
      </div>
    )
  }
}

export default App
