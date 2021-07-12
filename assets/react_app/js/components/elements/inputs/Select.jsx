import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import TextField from './TextField'

const Select = ({label, name, isRequired, value, options = [], onChange}) => {
	const [textInput, setTextInput] = useState("")

	useEffect(() => {
		if(!Array.isArray(options)) {
			throw 'Select required an array as options'
		}
	}, [options])

	const handleSelect = () => {
		
	}

	const handleChange = ({currentTarget}) => {
		setTextInput(currentTarget.value)
	}

	const filteredOptions = options.filter(option => {
		const length = textInput.length
		if(length === 0) return true
		return option.substring(0, length).toLowerCase() === textInput.toLowerCase()
	})

	console.log(filteredOptions)

	return (
		<>
			<TextField 
				isRequired={isRequired}
				onChange={handleChange}
				value={textInput}
				name={name}
				label={label}
				autoComplete="off"
			/>
			<Container isEmpty={filteredOptions.length === 0}>
				{filteredOptions.length === 0 ? (
					<p>Aucune option</p>
				) : (
					null
				)}
			</Container>
		</>
	)
}

export default Select

const Container = styled.div`
	position: absolute;
	background-color: white;
	border: solid 1px grey;
   	top: 74px;
    left: 0;
    right: 0;
    padding: 0 20px;
    margin: 0 26px 0 29px;
    border-radius: 2px;
    text-align: ${props => props.isEmpty ? "center" : "inherit"};
    font-family: "Roboto Light", sans serif;
    font-style: italic;
`

