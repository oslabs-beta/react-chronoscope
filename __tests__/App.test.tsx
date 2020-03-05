import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../src/components/App';
import { MainContainer } from '../src/components/MainContainer';

describe('React-ChronoScope Component Tests', () => {
  describe('Component: App', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<App />);
    });

    it('should render correctly with no props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Renders Main Container', () => {
      expect(wrapper.type()).toEqual(MainContainer);
    });
  });
});
