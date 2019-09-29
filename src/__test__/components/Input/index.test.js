import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Input from '../../../components/Input'

Enzyme.configure({adapter: new Adapter()})

describe('Input', () => {
  const input = shallow(<Input />)
  const invalidInput = shallow(<Input error="I'm an error" />)

  it('renders the Input', () => {
    expect(input.exists('.input')).toEqual(true)
  })

  it('renders an invalid Input message', () => {
    expect(invalidInput.exists('.error')).toEqual(true)
  })
})
