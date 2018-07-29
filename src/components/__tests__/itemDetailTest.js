import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import ItemDetail from '../ItemDetail';

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

   it('Should create 2 item containers and do not include the name', () => {
      testProps.item = {
         name: 'Test',
         age: '44',
         height: '6'
      }
      const wrapper = shallow(<ItemDetail {...testProps} />);
      expect(wrapper.find('.item-container').length).toBe(2);

   });

});
