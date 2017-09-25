import { createStore } from 'redux';
import carApp from '../reducers/reduser';
import testStore from '../testStoreObj/testStore';


let store = createStore(carApp, testStore);
console.log(store.getState())

export default store;