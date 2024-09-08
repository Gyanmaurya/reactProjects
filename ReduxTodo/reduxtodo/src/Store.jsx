 
 import { legacy_createStore as createStore} from 'redux';
 import { rootReducer } from './Reducer/reducer';

 export const Store = createStore(rootReducer);