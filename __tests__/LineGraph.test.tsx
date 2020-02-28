import React from 'react';
import { shallow } from 'enzyme';

import LineGraph from '../src/components/LineGraph';

describe('React-ChronoScope Component Tests', () => {
  describe('Component: LineGraph', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<LineGraph/>);
    });

    // it('Renders a <div> tag', () => {
    //   expect(wrapper.type()).toEqual('div');
    // });
  });
});