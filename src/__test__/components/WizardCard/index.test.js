import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {WizardCard} from '../../../components/WizardCard'

Enzyme.configure({adapter: new Adapter()})

describe('WizardCard', () => {
  const card = shallow(<WizardCard id="testCard">Hello</WizardCard>)

  it('renders the WizardCard', () => {
    expect(card.find('div').prop('id')).toEqual("testCard")
  })
})
