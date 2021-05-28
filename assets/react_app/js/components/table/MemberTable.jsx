import React, { useState, useEffect } from "react"

import MUIDataTable from "mui-datatables"
import { format } from "date-fns"

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import CircularProgress from "@material-ui/core/CircularProgress"

const MemberTable = ({members, loading}) => {

	const MUITheme = () => createMuiTheme({
		overrides: {
			MUIDataTable: {
				root: {
					backgroundColor: "#FF000"
				},
				paper: {
					boxShadow: "none"
				}
			},
		}
	})

	const columns = [
	    {
			name: "civility",
			label: "Civilité",
			options: {
				filter: true,
				sort: true,
			},
	    },
	    {
			name: "firstname",
			label: "Prénom",
			options: {
				filter: true,
				sort: true,
			},
	    },
	    {
			name: "lastname",
			label: "Nom",
			options: {
				filter: true,
				sort: true,
			},
	    },
	    {
			name: "email",
			label: "Email",
			options: {
				filter: true,
				sort: true,
			},
	    },
	    {
			name: "phoneNumber",
			label: "Tel",
			options: {
				filter: true,
				sort: true,
			},
	    },
	    {
			name: "rank",
			label: "Rôle",
			options: {
				filter: true,
				sort: true,
			},
	    },
	    {
			name: "createdAt",
			label: "Adhésion le",
			options: {
				filter: true,
				sort: true,
			},
	    }
	]

	const options = {
		filterType: "checkbox",
		customToolbarSelect: () => {},
		textLabels: {
			body: {
				noMatch: "Il n'y a pas de clients",
				toolTip: "Trier",
				columnHeaderTooltip: (column) => `Trier par ${column.label}`,
			},
			pagination: {
				next: "Page suivante",
				previous: "Page précédente",
				rowsPerPage: "Lignes par page:",
				jumpToPage: "Page:",
				displayRows: "of",
			},
			toolbar: {
				search: "Recherche",
				downloadCsv: "Télécharger CSV",
				print: "Imprimer",
				viewColumns: "Montrer colonnes",
				filterTable: "Filter la table",
			},
			filter: {
				all: "Tout",
				title: "FILTERS",
				reset: "REINITIALISER",
			},
			viewColumns: {
				title: "Montrer colonnes",
				titleAria: "Cacher colonnes",
			},
			selectedRows: {
				text: "ligne(s) sélectionnée(s)",
				delete: "Supprimer",
				deleteAria: "Supprimer les lignes sélectionnées",
			},
		},
	}

	const dataTableFormat = () => {
		let newTableData = []
		members.map((member) => {
			const newMember = {
				civility: member.civility,
				firstname: member.firstname,
				lastname: member.lastname,
				email: member.email,
				phoneNumber: member.phoneNumber,
				createdAt: format(Date.parse(member.createdAt), "d MMM yyyy"),
				rank: member.roles[0]
			}

			newTableData.push(newMember)
		})

		return newTableData
	}

	const tableData = dataTableFormat()

	return (
		<div className={"muiDatatableDiv"} style={{ position: "relative" }}>
			{loading && loadingComponent}
			<MuiThemeProvider theme={MUITheme()}>
				<MUIDataTable
					data={tableData}
					columns={columns}
					options={options}
				/>
			</MuiThemeProvider>
		</div>
	)
}

const loadingComponent = (
	<div
		style={{
			position: "absolute",
			zIndex: 110,
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			background: "rgba(255,255,255,0.8)",
		}}
	>
	<CircularProgress
		size={64}
		style={{
			position: "absolute",
			top: "50%",
			left: "50%",
			color: "#3aafa0",
		}}
	/>
	</div>
);

export default MemberTable