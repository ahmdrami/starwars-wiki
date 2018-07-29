import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Menu from '../Menu';
import Spinner from '../Spinner';

configure({ adapter: new Adapter() });
const testProps = {
   isFetching: true,
   onClick: jest.fn(),
   menu: ['a', 'b']
};
describe('Menu', () => {
   it('Should be in a loading state when isFetching prop is true', () => {
      const wrapper = shallow(<Menu {...testProps} />);
      expect(wrapper.find(Spinner).length).toEqual(1);
      expect(wrapper).toMatchSnapshot();

   });

   it('should display menu items when data is fetched and should not contain Loading text', () => {
      testProps.isFetching = false;
      const wrapper = shallow(<Menu {...testProps} />);
      expect(wrapper.find('button').length).toEqual(3); 
      expect(wrapper.text()).not.toContain('Loading');
   })
});
