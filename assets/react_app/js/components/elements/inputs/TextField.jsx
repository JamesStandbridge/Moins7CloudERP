import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import 'fontsource-roboto';
require("./anim.css");

const TextField = ({
	value, 
	onChange,
	name,
	label,
	placeholder,
	variant,
	type
}) => {
	const [ isFocused, focus] = useState(false)

	return (	
		<Container>
			<Label 
				moveUp={isFocused || value.length !== 0}
				isFocused={isFocused}
				className={isFocused || value.length !== 0 ? `field-label up` : "field-label"}
			>
				{label}
			</Label>
			<Input
				value={value}
				onChange={onChange}
				name={name}
				onFocus={() => focus(true)}
				onBlur={() => focus(false)}
				type={type}
			>
			</Input>
		</Container>
	)
}

export default TextField;

const Container = styled.div`
	position: relative;
	width: 100%;
    height: 52px;
`

const Label = styled.div`
    font-size: 16px;
    position: absolute;
    top: 28px;
    z-index: 1;
    color: ${props => props.isFocused ? props.theme.info : props.theme.placeholder};
    pointer-events: none;
`

const Input = styled.input`
    width: 100%;
    position: absolute;
    top: 20px;
    height: 30px;
    font-size: 16px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${props => props.theme.typo};
    &:focus {
    	border-bottom: solid 2px ${props => props.theme.info};	
    };


	&:-webkit-autofill,
	&:-webkit-autofill:hover, 
	&:-webkit-autofill:focus {
	    width: 100%;
	    position: absolute;
	    top: 20px;
	    height: 30px;
	    font-size: 18px;
	    border: none;
	    outline: none;
	    border-bottom: 1px solid ${props => props.theme.typo};
	}
`


