import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import 'fontsource-roboto';
require("./anim.css");

const TextField = ({
	value, 
	onChange,
	name,
	label,
	placeholder
}) => {
	const [ isFocused, focus] = useState(false)

	return (	
		<Container>
			<Label 
				moveUp={isFocused || value.length !== 0}
				isFocused={isFocused}
				className={isFocused || value.length !== 0 ? "field-label outlined up" : "field-label"}
			>
				{label}
			</Label>
			<Outline isFocused={isFocused} >
				{isFocused || value.length !== 0 ? (
					<Legend>{label}</Legend>
				) : (null)}
				
				<Input
					value={value}
					onChange={onChange}
					name={name}
					onFocus={() => focus(true)}
					onBlur={() => focus(false)}
				>
				</Input>
			</Outline>
		</Container>
	)
}

export default TextField;

const Legend = styled.legend`
	opacity: 0;
`

const Outline = styled.fieldset`
    position: absolute;
    top: 20px;
    border-radius: 4px;
    border-color: ${props => props.isFocused ? props.theme.info : props.theme.typo};
    margin-top: 8px;
`

const Container = styled.div`
	position: relative;
	display: flex;
	width: 25%;
`

const Label = styled.div`
    font-size: 18px;
    position: absolute;
    top: 36px;
    left: 18px;
    z-index: 1;
    color: ${props => props.isFocused ? props.theme.info : props.theme.typo};
    pointer-events: none;
`

const Input = styled.input`
    width: 100%;
    height: 30px;
    font-size: 18px;
    border: none;
    outline: none;
`


