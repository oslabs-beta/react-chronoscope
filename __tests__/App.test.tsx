import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../src/components/App';

describe('React-ChronoScope Component Tests', () => {
  describe('Component: App', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<App/>);
    });

    it('Renders a <div> tag', () => {
      expect(wrapper.type()).toEqual('div');
    });
  });
});