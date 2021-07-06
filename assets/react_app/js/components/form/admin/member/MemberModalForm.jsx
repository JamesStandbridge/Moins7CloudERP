import React, { useState } from 'react'
import styled from 'styled-components'

import Button from '../../../elements/buttons/ActionButton'
import ConfirmButton from '../../../elements/buttons/ConfirmButton'
import CancelButton from '../../../elements/buttons/CancelButton'

import Accordeon from '../../../elements/layout/Accordeon'
import TextField from '../../../elements/inputs/TextField'
import FormControl from '../../../elements/inputs/FormControl'

import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from "@material-ui/core/styles"
import {
  Modal,
  Fade,
  CircularProgress,
  Backdrop,
  IconButton
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}))

  

const MemberModalForm = (props) => {
	const classes = useStyles();

	const [ open, setOpen ] = useState(true)
	const [ member, setMember ] = useState({
		firstname: {value: "", error: "", isRequired: true},
		lastname: {value: "", error: "", isRequired: true},
		email: {value: "", error: "", isRequired: true},
		civility: {value: "", error: "", isRequired: true},
		phoneNumber: {value: "", error: "", isRequired: true},
		password: {value: "", error: "", isRequired: true},
		street: {value: "", error: "", isRequired: false},
		city: {value: "", error: "", isRequired: false},
		zipcode: {value: "", error: "", isRequired: false},
		country: {value: "", error: "", isRequired: true}
	})

	const handleChange = ({currentTarget}) => {
		setMember({...member,
			[currentTarget.name]: {value: currentTarget.value, error: ""}
		})
	}

	const handleCancel = () => {
		setOpen(false)
		setMember({
			firstname: {value: "", error: "", isRequired: true},
			lastname: {value: "", error: "", isRequired: true},
			email: {value: "", error: "", isRequired: true},
			civility: {value: "", error: "", isRequired: true},
			phoneNumber: {value: "", error: "", isRequired: true},
			password: {value: "", error: "", isRequired: true},
			street: {value: "", error: "", isRequired: false},
			city: {value: "", error: "", isRequired: false},
			zipcode: {value: "", error: "", isRequired: false},
			country: {value: "", error: "", isRequired: true}
		})
	}

	return (
		<>
			<Button onClick={() => setOpen(true)} Icon={AddIcon}>Fiche d'adhésion</Button>

			<Modal
				className={classes.modal}
				open={open}
				onClose={() => setOpen(false)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
				disableEnforceFocus
			>
				<Fade in={open}>
					<ModalContainer>
						<ModalHeader>
							<ModalTitle>Nouvelle adhésion</ModalTitle>
							<ModalAction>
								<IconButton onClick={() => setOpen(false)}>
									<CloseIcon />
								</IconButton>
							</ModalAction>
						</ModalHeader>

						<ModalBody>
							<FormPart>
								<Accordeon title={"Informations générales"}>
									<h4>{"test"}</h4>
								</Accordeon>
								<FormControl width={25}>
									<TextField
										isRequired={member.firstname.isRequired}
										onChange={handleChange}
										value={member.firstname.value}
										name="firstname"
										label="Prénom"
										autoComplete="off"
									/>
								</FormControl>
								<FormControl width={25}>
									<TextField
										isRequired={member.lastname.isRequired}
										onChange={handleChange}
										value={member.lastname.value}
										name="lastname"
										label="Nom de famille"
										autoComplete="off"
									/>
								</FormControl>
								<FormControl width={25}>
									<TextField
										isRequired={member.email.isRequired}
										onChange={handleChange}
										value={member.email.value}
										name="email"
										label="Email"
										autoComplete="off"
									/>
								</FormControl>
								<FormControl width={25}>
									<TextField
										isRequired={member.phoneNumber.isRequired}
										onChange={handleChange}
										value={member.phoneNumber.value}
										name="phoneNumber"
										label="Numéro de téléphone"
										autoComplete="off"
									/>
								</FormControl>
								<FormControl width={25}>
									<TextField
										isRequired={member.street.isRequired}
										onChange={handleChange}
										value={member.street.value}
										name="street"
										label="Voie"
										autoComplete="off"
									/>
								</FormControl>
								<FormControl width={25}>
									<TextField
										isRequired={member.city.isRequired}
										onChange={handleChange}
										value={member.city.value}
										name="city"
										label="Ville"
										autoComplete="off"
									/>
								</FormControl>
								<FormControl width={25}>
									<TextField
										isRequired={member.zipcode.isRequired}
										onChange={handleChange}
										value={member.zipcode.value}
										name="zipcode"
										label="Code postal"
										autoComplete="off"
									/>
								</FormControl>
								<FormControl width={25}>
									<TextField
										isRequired={member.country.isRequired}
										onChange={handleChange}
										value={member.country.value}
										name="country"
										label="Pays"
										autoComplete="off"
									/>
								</FormControl>
							</FormPart>
						</ModalBody>

						<ModalFooter>
							<CancelButton onClick={handleCancel}>Annuler</CancelButton>
							<ConfirmButton style={{marginLeft: "auto"}}>Enregistrer</ConfirmButton>
						</ModalFooter>
					</ModalContainer>
				</Fade>
			</Modal>
		</>
	)
}

export default MemberModalForm

const FormPart = styled.div`
	display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 15px 25px;
`

const ModalFooter = styled.div`
	border-top: solid 1px #dadada;
	position: absolute;
	bottom: 0px;
	height: 50px;
	width: 91%;
	display: flex;
	align-items: center;
	padding: 14px 30px;
`

const ModalBody = styled.div`
    padding: 50px 20px;
`

const ModalAction = styled.div`
	margin-left: auto;
`

const ModalTitle = styled.h3`
	margin: 0;
	font-family: "Roboto Light", sans serif;
	font-weight: bold;
	font-size: 20px;
`

const ModalHeader = styled.div`
	border-bottom: solid 1px #dadada;
	height: 50px;
	padding: 14px 14px 14px 34px;
    align-items: center;
    display: flex;
`

const ModalContainer = styled.div`
	background-color: white;
	width: 700px;
	height: 800px;
	border: none;
	position: relative;
	border-radius: 4px;
	&:focus {
		border: none;
	}
	&:active {
		border: none;
	}
`