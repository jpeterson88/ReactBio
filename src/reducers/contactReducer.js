import * as types from '../actions/actionTypes'

export default function contactReducer(state = [], action){
	switch(action.type){
		case types.SEND_CONTACT_EMAIL_SUCCESS:
			return action.response;

			default:
				return state;
	}
}
