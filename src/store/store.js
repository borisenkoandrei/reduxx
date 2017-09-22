import { createStore } from 'redux';
import carApp from '../reducers/reduser';
import testStore from '../testStoreObj/testStore';


let store = createStore(carApp, testStore);

export default store;