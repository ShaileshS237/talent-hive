import * as React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import Button from "../../components/Button/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { MdDone } from "react-icons/md";
import supabase from '../../supabase/client.js'

export default function UserForm({onSubmit}) {
	const [formData, setFormData] = useState({});
	const [age, setAge] = React.useState("");
	const [formSize,setFormSize] = useState(0);
	const [isBtnDisabled,setIsBtnDisabled] = useState(true);

	React.useEffect(() => {
		if(formSize === 11) setIsBtnDisabled(false);
	},[formSize]);

	const handleSelect = (event) => setAge(event.target.value);
	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		setFormSize(Object.values(formData).filter((data) => data != '').length)
		console.log(Object.values(formData));
		
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
		onSubmit();
		
		const {data,error} = await supabase.from('candidates').insert(formData).select();
		if(error) console.log(error);
	}

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
					<TextField
						label="age"
						name="age"
						type="number"
						variant="outlined"
						fullWidth
						onChange={handleChange}
					/>
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
					// padding="4"
					align={"center"}
					disabled={isBtnDisabled}
				/>
			</form>
		</div>
	);
}
