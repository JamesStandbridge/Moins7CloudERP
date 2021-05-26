import React from "react"
import axios from "axios"

const AxiosService = {
    sendPostRequest: async function(url, headers, body) {
		const res = await axios.post(url, body, {
			headers: headers
		})
		return res
	},

	sendGetRequest: async function(url, headers) {
		const res = await axios.get(url, {
			headers: headers
		})
		return res
	},

	sendDeleteRequest: async function(url, headers, data = null) {
		const res = await axios.delete(url, {
			headers: headers,
			data: data
		})
		return res
	}
}

export default AxiosService

