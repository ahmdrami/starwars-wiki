import * as actions from './index';

describe('star wars actions', () => {
   it('should match the path param when selectPath action is triggered', () => {
      expect(actions.selectedPath('paths')).toEqual({
         type: 'SELECTED_PATH',
         path: 'paths'
      });
   });
});
