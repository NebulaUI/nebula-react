import React from 'react'

import {
  SiteWrap,
  Section,
  Tabs,
  BareList,
  InlineList,
  MatrixList,
  UniformedList,
  Form,
} from 'nebula-react'

const App = () => (
  <div>
    <Section size="md">
      <SiteWrap padding>
        <h1>Nebula React</h1>
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
        <Form.Radio id="radio-1" value="one" name="radio-group" checked>Option 1</Form.Radio>
        <Form.Radio id="radio-2" value="two" name="radio-group">Option 2</Form.Radio>
        <Form.Radio id="radio-3" value="two" name="radio-group" disabled>Option 3</Form.Radio>
        <Form.Checkbox id="checkbox-1">Option 1</Form.Checkbox>
        <Form.Checkbox id="checkbox-2" checked disabled>Option 2</Form.Checkbox>
        <Form.Checkbox id="checkbox-3" disabled>Option 3</Form.Checkbox>
        <Form.Select name="select-name">
          <Form.Option defaultValue>Select option</Form.Option>
          <Form.Option selected value="1">Option 1</Form.Option>
          <Form.Option disabled value="2">Option 2</Form.Option>
          <Form.Option multiple value="3">Option 3</Form.Option>
        </Form.Select>
      </SiteWrap>
    </Section>
  </div>
)

export default App
