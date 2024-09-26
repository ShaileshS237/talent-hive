import React from "react";
import Title from "../../components/Title/Title";
import UserForm from "../UserForm/UserForm";
import Button from "../../components/Button/Button";
import { IoMdAdd } from "react-icons/io";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TableComponent from "../../components/TableComponent/TableComponent";
import { IoCloseCircleOutline } from "react-icons/io5";
import ModalClose from '@mui/joy/ModalClose';

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	borderRadius: 4,
	bgcolor: "background.paper",
	p: 5,
};

export default function Candidates() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true); // Open the modal
	};
	
	const handleClose = (event,reason) => {
		if(reason && reason === "backdropClick") return
		setOpen(false);
	}

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				data-bs-backdrop="static"
			>
				<Box sx={style}>
					<div className="flex justify-between">
						<Title title="Add Candidate" />
						<ModalClose onClick={handleClose} variant="plain" sx={{ m: 1 }} />
					</div>
					<UserForm onSubmit={handleClose} />
				</Box>
			</Modal>
			{/* <Title title={"Candidates"} /> */}
			<div className="grid">
				<div className="flex justify-between items-center">
					<h1 className="text-2xl font-medium">Candidates</h1>
					<Button
						onClick={handleOpen}
						title={"Add Candidate"}
						icon={<IoMdAdd />}
					/>
				</div>
				<div>
					<TableComponent />
				</div>
			</div>
		</div>
	);
}
