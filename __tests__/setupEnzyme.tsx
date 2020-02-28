import React from 'react';
import ReactDOM from 'react-dom';

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import { App } from '../src/components/App';
// import LineGraph from '../src/components/LineGraph';
// import TreeGraph from '../src/components/TreeGraph';


// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React-ChronoScope Component Tests', () => {

  describe('Component: App', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<App/>);
    });

    // it('renders without crashing', () => {
    //       const div = document.createElement('div');
    //       ReactDOM.render(<App />, div);
    //   });

    it('Renders a <div> tag', () => {
      expect(wrapper.type()).toEqual('div');
    });
  });
});