import React from 'react';
import TextInput from './TextInput';
import {shallow} from 'enzyme';

test('Renders a container div with input and label', () => {
  const wrapper = shallow(<TextInput
    htmlId="test"
    cssClass="testClass"
    label="testLabel"
    pattern="testPattern"
    title="testTitle"
    name="test"
    value=""
    onChange={() => {}}
    required
    />
  );
  // Should have a container with the testClass specified
  expect(wrapper.find('div.testClass').length).toBe(1);

  // Should find an input label inside the div
  expect(wrapper.find('div.testClass').find('input').length).toBe(1);

});
