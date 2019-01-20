export function reducer(state, action) {

  switch (action.type) {

    case 'TOGGLE_PRODUCT_CODE':
      console.log('existing state: ', JSON.stringify(state));
      console.log('action: ', action);
      return {
        ...state, // spread current state object literal into this object
        showProductCode: action.payload // then make changes to properties we need to change
      };

    default:
      return state;
  }
}
