import appData from './index';

describe('star wars reducer', () => {
   it('should initialise an empty state with paths as selected path', () => {
      expect(appData(undefined, {})).toEqual({
         appState: {},
         selectedPath: 'paths'
      });
   });
});
