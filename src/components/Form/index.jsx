import Label from './Label'
import TextInput from './TextInput'
import TextArea from './TextArea'
import CheckboxWrapper from './CheckboxWrapper'
import CheckboxLabel from './CheckboxLabel'
import CheckboxInput from './CheckboxInput'


const Form = {
  Label,
  TextInput,
  TextArea,
  Checkbox: {
    Wrapper: CheckboxWrapper,
    Label: CheckboxLabel,
    Input: CheckboxInput
  }
}

export { Form }
