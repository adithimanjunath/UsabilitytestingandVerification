import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import Loader from '../Loader/Loader';

describe('Button component', () => {
  it('renders button with loader when isLoading is true', () => {
    const wrapper = shallow(<Button isLoading={true} />);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find(Loader).prop('component')).toEqual('Login');
  });

  it('renders button with value as displayTrue when isLoading is false', () => {
    const handleLoginMock = jest.fn();
    const wrapper = shallow(
      <Button
        isLoading={false}
        value={true}
        handleLogin={handleLoginMock}
        displayTrue="True Text"
        displayFalse="False Text"
      />
    );
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toEqual('True Text');
  });
});
