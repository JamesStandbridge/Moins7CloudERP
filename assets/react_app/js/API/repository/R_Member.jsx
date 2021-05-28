import React from "react"
import HttpService from "../axios/AxiosService"
import HeaderBuilder from "../helpers/HeaderBuilder"
import EndPoints from "../helpers/EndPoints"

const R_Security = {
	getAll: async function(token) {
		const res = await HttpService.sendGetRequest(
			EndPoints.URL_GET_MEMBERS,
			HeaderBuilder.GET_HEADER_AUTHORIZATION(token)
		)
		return res
	}
}

export default R_Security

