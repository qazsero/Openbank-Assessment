import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from '../../../components/Button'

Enzyme.configure({adapter: new Adapter()})

describe('Button', () => {
  const primaryButton = shallow(<Button>Hello</Button>)

  it('renders the Primary button', () => {
    expect(primaryButton.find('button').prop('className')).toEqual('button')
  })


})
