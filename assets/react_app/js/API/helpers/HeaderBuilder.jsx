import React from "react"

const HeaderBuilder = {

	POST_HEADER: function() {
		return {
			"Content-type": "application/json",
			"method": "POST"
		}
	},

	GET_HEADER: function() {
		return {
			"Content-type": "application/json",
			"method": "GET",
		}
	},

	POST_HEADER_AUTHORIZATION: function(token) {
		return {
			"Content-type": "application/json",
			"Authorization": "Bearer " + token,
			"method": "POST"
		}
	},

	POST_FORM_HEADER_AUTHORIZATION: function(token) {
		return {
			"Content-Type": "multipart/form-data",
			"Authorization": "Bearer " +token,
			"method": "POST"
		}		
	},

	GET_HEADER_AUTHORIZATION: function(token) {
		return {
			"Content-type": "application/json",
			"Authorization": "Bearer " + token,
			"method": "GET"
		}
	},

	PATCH_HEADER_AUTHORIZATION: function(token) {
		return {
			"Content-type": "application/json",
			"Authorization": "Bearer " + token,
			"method": "PATCH",
		}
	},

	DELETE_HEADER_AUTHORIZATION: function(token) {
		return {
			"Content-type": "application/json",
			"Authorization": "Bearer " + token,
			"method": "DELETE"
		}
	}
}

export default HeaderBuilder

