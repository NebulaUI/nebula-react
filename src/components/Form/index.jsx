import Label from './Label'
import TextInput from './TextInput'
import TextArea from './TextArea'
import Checkbox from './Checkbox'

const Form = {
  Label,
  TextInput,
  TextArea,
  Checkbox: {
    Label: Checkbox.Label,
    Input: Checkbox.Input
  }
}

export { Form }
