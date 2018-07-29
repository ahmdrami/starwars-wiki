import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import ItemDetail from '../ItemDetail';
import ItemContainer from '../ItemContainer';
import Colors from '../Color';

configure({ adapter: new Adapter() });
const testProps = {
   item: null,
   path: 'paths'
};
describe('ItemDetail Component', () => {
   it('Should display Start Wars Resources when item is null', () => {
      const wrapper = shallow(<ItemDetail {...testProps} />);
      expect(wrapper.text()).toContain('Star Wars Resources');
      expect(wrapper).toMatchSnapshot();

   });

   it('Should create 2 ItemContainer component and one Color Component', () => {
      testProps.item = {
         name: 'Test',
         age: '44',
         height: '6',
         colors: 'red,blue'
      }
      const wrapper = shallow(<ItemDetail {...testProps} />);
      expect(wrapper.find(ItemContainer).length).toBe(2);
      expect(wrapper.find(Colors).length).toBe(1);

   });

});
