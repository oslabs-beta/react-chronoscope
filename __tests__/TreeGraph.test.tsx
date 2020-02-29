import React from 'react';
import { shallow, render } from 'enzyme';

// needed to mock chrome dev tools api
import chrome from "sinon-chrome";

import TreeGraph from '../src/components/TreeGraph';

describe('React-ChronoScope Component Tests', () => {
  describe('Component: TreeGraph', () => {
    let wrapper;

    beforeAll(() => {
      global.chrome = chrome;
      wrapper = render(<TreeGraph/>);
    });

    // it('should render correctly with no props', () => {
    //   expect(wrapper).toMatchSnapshot();
    // });

    // it('Renders a <div> tag', () => {
    //   expect(wrapper.type()).toEqual('div');
    // });

    afterAll(() => {
      chrome.flush()
    })
  });
});