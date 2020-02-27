// import { App } from './../src/components/App';
import * as React from 'react';
// import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as Enzyme from 'enzyme';
// import toJson from 'enzyme-to-json';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import * as App from '../src/components/App';
import LineGraph from '../src/components/LineGraph';
import TreeGraph from '../src/components/TreeGraph';

// Newer Enzyme versions require an adapter to a particular version of React
Enzyme.configure({ adapter: new Adapter() });

describe('React-ChronoScope Component Tests', () => {
  describe('Component: App', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = Enzyme.shallow(<LineGraph/>);
    });

    it('Renders a <p> tag with the label in bold', () => {
      expect(wrapper.type()).toEqual('p');
      expect(wrapper.text()).toEqual('Mega: Markets');
      expect(wrapper.find('strong').text()).toMatch('Mega');
    });
  });
});