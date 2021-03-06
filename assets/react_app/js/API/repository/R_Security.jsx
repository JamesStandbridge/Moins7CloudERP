import React from "react"
import HttpService from "../axios/AxiosService"
import HeaderBuilder from "../helpers/HeaderBuilder"
import EndPoints from "../helpers/EndPoints"

const R_Security = {
	login: async function(credentials) {
		const res = await HttpService.sendPostRequest(
			EndPoints.URL_LOGIN, 
			HeaderBuilder.POST_HEADER(),
			credentials
		)
		return res
	},

	getUser: async function(token) {
		const res = await HttpService.sendGetRequest(
			EndPoints.URL_GET_USER,
			HeaderBuilder.GET_HEADER_AUTHORIZATION(token)
		)
		return res
	}
}

export default R_Security

