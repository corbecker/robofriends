import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton.js';

describe ('Counter Button:', () =>{
  const mockProps = {
    color: 'blue'
  }
  const wrapper = shallow(<CounterButton color={mockProps.color} />);
  it('renders counter button with props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly increments the counter', () => {
    wrapper.find('[id="counterButton"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
  });

  it('props.color is blue', () => {
    expect(wrapper.props().color).toEqual('blue');
  });
});

