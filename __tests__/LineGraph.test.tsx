import React from 'react';
import { shallow, mount } from 'enzyme';

import LineGraph from '../src/components/LineGraph';

describe('React-ChronoScope Component Tests', () => {
  describe('Component: LineGraph', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(<LineGraph/>);
    });

    it('should render correctly with no props', () => {
      expect(wrapper).toMatchSnapshot();
      // wrapper.unmount();
    });
  });
});