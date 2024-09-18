import React from "react";
import Title from "../../components/Title/Title";
import UserForm from "../UserForm/UserForm";
import Button from "../../components/Button/Button";
import { IoMdAdd } from "react-icons/io";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
	const handleClose = () => setOpen(false);
	return (
		<div>
			{/* <Title title={"Candidates"} /> */}
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-medium">Candidates</h1>
				<Button
					onClick={handleOpen}
					title={"Add Candidate"}
					icon={<IoMdAdd />}
				/>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Title title="Add Candidate" />
						<UserForm />
					</Box>
				</Modal>
			</div>
		</div>
	);
}
