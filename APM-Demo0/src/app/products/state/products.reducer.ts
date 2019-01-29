import {Product} from "../product";
import * as fromRoot from '../../state/app.state'; // import State interface

export interface State extends fromRoot.State { // extend w/ProductState and export this new State interface
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

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
