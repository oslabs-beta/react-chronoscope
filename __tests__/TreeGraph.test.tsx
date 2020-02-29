import React from 'react';
import { shallow, render } from 'enzyme';

// needed to mock chrome dev tools api
import * as chrome from "sinon-chrome";

import TreeGraph from '../src/components/TreeGraph';

describe('React-ChronoScope Component Tests', () => {
  describe('Component: TreeGraph', () => {
    test.skip('skip', () => {});
    // let wrapper;

    // beforeAll(() => {
    //   global.chrome = chrome;
    //   wrapper = shallow(<TreeGraph/>);
    // });

    // it('should render correctly with no props', () => {
    //   expect(wrapper).toMatchSnapshot();
    // });

    // it('Renders a <div> tag', () => {
    //   expect(wrapper.type()).toEqual('div');
    // });

    // it('should have called a webextension API', () => {
    //   expect(chrome.runtime.connect()).toHaveBeenCalled();
    // });

    // afterAll(() => {
    //   chrome.flush()
    // })
  });
});