import React from "react"
import jwt_decode from "jwt-decode"

const TokenHandler = {
    decode: function(token) {
    	const decoded_token = jwt_decode(token)
    	return decoded_token
	},

	isPresident: function(token) {
		if(token === "" || token === null) {
			return false
		} else {
			const decoded_token = jwt_decode(token)
			return decoded_token.roles.includes('ROLE_PRESIDENT')
		}
	},

	isAdmin: function(token) {
		if(token === "" || token === null)  {
			return false
		} else {
			const decoded_token = jwt_decode(token)
			return decoded_token.roles.includes('ROLE_ADMIN')
		}
	},

	isDirector: function(token) {
		if(token === "" || token === null)  {
			return false
		} else {
			const decoded_token = jwt_decode(token)
			return decoded_token.roles.includes('ROLE_DIRECTOR')
		}
	},

	getRole: function(token) {
		const decoded_token = jwt_decode(token)
		const roles = decoded_token.roles
		if(roles.includes('ROLE_PRESIDENT')) return 'ROLE_PRESIDENT'
		if(roles.includes('ROLE_DIRECTOR')) return 'ROLE_DIRECTOR'
		if(roles.includes('ROLE_ADMIN')) return 'ROLE_ADMIN'
		return 'ROLE_USER'
	},

	isExpired: function(token) {
		const current_time = new Date().getTime() / 1000
		return current_time > jwt_decode(token).exp
	},

	isConnected: function(token) {
		if(token === "" || token === null || TokenHandler.isExpired(token))  {
			return false
		} else {
			const decoded_token = jwt_decode(token);
			const bool = 
				decoded_token.roles.includes('ROLE_TIER') ||
				decoded_token.roles.includes('ROLE_OPERATOR') ||
				decoded_token.roles.includes('ROLE_ADMIN') ||
				decoded_token.roles.includes('ROLE_SUPER_ADMIN')
			return bool
				
		}		
	},

	getUser: function(token) {
		const decoded_token = jwt_decode(token)
		return {
			firstname: decoded_token.firstname,
			lastname: decoded_token.lastname,
			email: decoded_token.email,
			username: decoded_token.username,
			ip: decoded_token.ip
		}
	}
};

export default TokenHandler

