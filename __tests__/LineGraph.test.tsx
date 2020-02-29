import React from 'react';
import { shallow, mount } from 'enzyme';

// needed to mock chrome dev tools api
import chrome from "sinon-chrome";

import LineGraph from '../src/components/LineGraph';

describe('React-ChronoScope Component Tests', () => {
  describe('Component: LineGraph', () => {
    test.skip('skip', () => {});
    // let wrapper;

    // beforeAll(() => {
    //   global.chrome = chrome;
    //   wrapper = shallow(<LineGraph/>);
    // });

    // // it('should render correctly with no props', () => {
    // //   expect(wrapper).toMatchSnapshot();
    // //   // wrapper.unmount();
    // // });

    // afterAll(() => {
    //   chrome.flush()
    // })
  });
});