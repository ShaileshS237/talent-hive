import * as React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import styles from "./UserProfileForm.module.css";
import Button from "../../components/Button/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { MdDone } from "react-icons/md";
export default function UserForm() {
	const [formData, setFormData] = useState({});
	const [age, setAge] = React.useState("");

	const handleSelect = (event) => {
		setAge(event.target.value);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit}>
				<div className="grid gap-4 py-5  lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
					<TextField
						label="Name"
						name="name"
						type="text"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Age</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={age}
							label="Age"
							onChange={handleSelect}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label="Date of Birth"
						name="date"
						type="date"
						variant="outlined"
						fullWidth
						InputLabelProps={{
							shrink: true,
						}}
						onChange={handleChange}
					/>
					<TextField
						label="Email"
						name="email"
						type="email"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						label="Mobile Number"
						name="number"
						type="number"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						label="Year Of Experience"
						name="yoe"
						type="number"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						label="Resume URL"
						name="resume"
						type="url"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						label="Current Company / College"
						name="comp"
						type="text"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						label="Qualification"
						name="qualification"
						type="text"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						label="GitHub Link"
						name="github"
						type="url"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						label="Post Applying For"
						name="post"
						type="text"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						label="LinkedIn"
						name="linkedin"
						type="url"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
				</div>
				<Button
					onClick={handleSubmit}
					type="submit"
					icon={<MdDone />}
					title={"Submit"}
					padding={3}
					align={"center"}
				/>
			</form>
		</div>
	);
}
