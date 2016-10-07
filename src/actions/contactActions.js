import * as types from './actionTypes';
import contactApi from '../apis/contactApi';

export function sendContactEmailSuccess(courses){
	return {type: types.SEND_CONTACT_EMAIL, courses};
}

//thunks always return a function that accepts a dispatch
export function sendContactEmail(){
	return function (dispatch){
		var response = contactApi.sendContactEmal();
		console.log(response);
	};
}
