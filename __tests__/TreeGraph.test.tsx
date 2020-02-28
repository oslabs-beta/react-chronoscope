import React from 'react';
import { shallow } from 'enzyme';

import TreeGraph from '../src/components/TreeGraph';

describe('React-ChronoScope Component Tests', () => {
  describe('Component: TreeGraph', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<TreeGraph/>);
    });

    it('Renders a <div> tag', () => {
      expect(wrapper.type()).toEqual('div');
    });
  });
});