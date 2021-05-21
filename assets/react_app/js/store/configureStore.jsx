import { createStore } from 'redux';
import combineReducers from './reducers/reducerIndex';


import TokenManager from '../services/security/TokenManager'
// export default createStore(
// 	combineReducers,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


function saveToLocalStore(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('moins7-app-state', serializedState);
	} catch(e) {
		console.log(e);
	}
}

function loadFromLocalStorage() {
	try {
		const serializedState = localStorage.getItem('moins7-app-state');
		if (serializedState === null) {
			return undefined
		} else {
			let state = JSON.parse(serializedState);
			return state
		}
	} catch(e) {
		console.log(e);
		return undefined;
	}
}

const persistedState = loadFromLocalStorage();

const store = createStore(
	combineReducers,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStore(store.getState()));

export default store
