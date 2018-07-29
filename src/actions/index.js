export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const SELECTED_PATH = 'SELECTED_PATH';

export const selectedPath = path => ({
   type: SELECTED_PATH,
   path
});

export const requestData = path => ({
   type: REQUEST_DATA,
   path
});

export const receiveData = (path, resp) => ({
   type: RECEIVE_DATA,
   path,
   data: (path === 'paths')  ? resp: resp.results,
   receivedAt: Date.now()
});


const fetchData = (path = 'paths', query = 'api/') => dispatch => {
   const pathUrl = path === 'paths' ? query : `${query}${path}`;

   dispatch(requestData(path));

   return fetch(`https://swapi.co/${pathUrl}`)
      .then(resp => resp.json())
      .then(resp => {
         dispatch(receiveData(path, resp));
      });
};

const shouldFetchData = (state, path = 'path') => {
   const currentState = state.appState[path];

   if (!currentState) {
      return true;
   }
   if (currentState.isFetching) {
      return false;
   }
   return currentState.didInvalidate;
};

export const fetchDataIfNeeded = path => (dispatch, getState) => {
   // console.log(path, getState())
   if (shouldFetchData(getState(), path)) {
     return dispatch(fetchData(path))
   }

};
