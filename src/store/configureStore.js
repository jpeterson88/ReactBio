import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
	return createStore(reducers, initialState, applyMiddleware(reduxImmutableStateInvariant()));
}
